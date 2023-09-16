import React, { useRef, FormEvent } from 'react';
import { Dialog, Text, Flex, TextField, Button, TextArea } from '@radix-ui/themes';
import { useGetCollectionPoints, useAddCollectionPoint } from '../../hooks/collectionPoints';
import { useGetOrganizations, useGetOrganizationById } from '../../hooks/organizations';

import { toast } from 'react-toastify';

const CollectionPoint = () => {
  const { data: points, isLoading } = useGetCollectionPoints();
  const { mutate, isLoading: isCreating } = useAddCollectionPoint();
  const [open, setOpen] = React.useState(false);
  const { data: organizations, isLoading: isLoadingOrganizations } = useGetOrganizations();

  const pointDetails = useRef({
    name: '',
    organization: 'etc244o80s1152j',
    description: '',
    latitude: '',
    longitude: '',
    google_maps_url: '',
    city: '',
    open_time: '',
    close_time: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate(pointDetails.current, {
      onSuccess: () => {
        toast.success('Collection point added successfully.');
        setOpen(false);
      },
    });
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    textAlign: 'left',
    marginBottom: '20px'
  };

  const thStyle = {
    border: '1px solid #dddddd',
    padding: '12px',
    backgroundColor: '#f2f2f2'
  };

  const tdStyle = {
    border: '1px solid #dddddd',
    padding: '12px',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px'
  };

  const handleDialog = (newState) => {
    setOpen(newState);
  }

  const OrganizationNameCell = ({ orgId }) => {
    const { data: org, isLoading: isLoadingOrg } = useGetOrganizationById(orgId);
    if (isLoadingOrg) return <td style={tdStyle}>Loading...</td>;
    if (org) return <td style={tdStyle}>{org.name}</td>;
    return <td style={tdStyle}>Unknown Organization</td>;
  };
  

  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>Collection Points</h1>
      <Button 
        onClick={() => setOpen(true)} 
        style={buttonStyle}
      >
        + Add Collection Point
      </Button>
      {isLoading ? (
        'Loading...'
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Organization</th>
              <th style={thStyle}>Location</th>
              <th style={thStyle}>City</th>
              <th style={thStyle}>Open Time</th>
              <th style={thStyle}>Close time</th>
            </tr>
          </thead>
          <tbody>
            {points?.map((point) => (
              <tr key={point.id}>
                <td style={tdStyle}>{point.name}</td>
                <td style={tdStyle}>{point.description}</td>
                <OrganizationNameCell orgId={point.organization} />
                <td style={tdStyle}><a target="_blank" href={point.google_maps_url}>Open Maps</a></td>
                <td style={tdStyle}>{point.city}</td>
                <td style={tdStyle}>{point.open_time}</td>
                <td style={tdStyle}>{point.close_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Dialog.Root open={open} onOpenChange={handleDialog}>
        <Dialog.Trigger as={Button}>
          Add Collection Point
        </Dialog.Trigger>

        <Dialog.Content>
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                position: 'relative', // Make sure this is set to relative
                backgroundColor: 'white',
                padding: '1em',
                borderRadius: '8px',
                maxWidth: '90%',
                zIndex: 1001,
            }}>
                <button onClick={() => setOpen(false)} style={{
                    position: 'absolute',
                    right: '0px',
                    top: '-19px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '2.2em',
                }}>×</button>
                <form onSubmit={handleSubmit}>
                    <Dialog.Title>Add a New Collection Point</Dialog.Title>
                    <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                        Name
                        </Text>
                        <TextField.Input
                        required
                        name="name"
                        onChange={(e) => (pointDetails.current.name = e.target.value)}
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                        Organization
                        </Text>
                        <select
                            defaultValue="0"
                            name="organization"
                            onChange={(e) => (pointDetails.current.organization = e.target.value)}
                        >
                        <option value="0" disabled selected>
                            Select an organization
                        </option>
                        {isLoadingOrganizations ? (
                            <option>Loading...</option>
                        ) : (
                            organizations?.map((org) => (
                            <option key={org.id} value={org.id}>
                                {org.name}
                            </option>
                            ))
                        )}
                        </select>
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Address
                        </Text>
                        <TextField.Input
                        required
                        name="address"
                        onChange={(e) => (pointDetails.current.address = e.target.value)}
                        />
                    </label>

                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                        Description
                        </Text>
                        <TextArea
                        required
                        name="description"
                        onChange={(e) => (pointDetails.current.description = e.target.value)}
                        />
                    </label>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close as={Button}>
                        Cancel
                    </Dialog.Close>
                    <Button type="submit" disabled={isCreating}>
                        Add
                    </Button>
                    </Flex>
                </form>
            </div>
        </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default CollectionPoint;
