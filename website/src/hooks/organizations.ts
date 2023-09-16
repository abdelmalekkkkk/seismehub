import { useQuery } from 'react-query';
import PB from '../PB';

interface Organization {
  id?: string;
  name?: string;
  contact_name?: string;
  phone?: string;
  email?: string;
  address?: string;
  instagram_url?: string;
  facebook_url?: string;
  google_maps_url?: string;
  website?: string;
  active?: boolean;
}

const useGetOrganizations = () => {
  return useQuery({
    queryKey: "ngos",
    queryFn: async () => {
      const orgs = await PB.collection("ngos").getFullList<Organization>({
        fields: "id,name,contact_name,phone,email,address,instagram_url,facebook_url,google_maps_url,website,active",
        sort: "name",
        perPage: 500,
      });

      return orgs;
    },
    refetchOnMount: false,
    staleTime: Infinity,
  });
};

const useGetOrganizationById = (id: string) => {
    return useQuery({
      queryKey: ["ngo", id],
      queryFn: async () => {
        const obj = PB.collection("ngos");
        console.log("here debug");
        console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj)));

        const org = await PB.collection("ngos").getOne<Organization>(id, {
          fields: "id,name,contact_name,phone,email,address,instagram_url,facebook_url,google_maps_url,website,active",
        });
        return org;
      },
      refetchOnMount: false,
      staleTime: Infinity,
    });
};

export { useGetOrganizations, useGetOrganizationById };
export type { Organization };
