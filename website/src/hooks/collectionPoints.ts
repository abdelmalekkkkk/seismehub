import { useQuery, useMutation } from 'react-query';
import PB from '../PB';

interface CollectionPoint {
    id?: string;
    name?: string;
    description?: string;
    organization?: string;  // relation ??
    latitude: number;
    longitude: number;
    google_maps_url?: number;
    active?: boolean;
    city?: string;
    open_time?: string;
    close_time?: string;
}

const useGetCollectionPoints = () => {
  return useQuery({
    queryKey: "collection_points",
    queryFn: async () => {
        const cp = await PB.collection("collection_points").getFullList<CollectionPoint>({
            fields: "id,description,name,organization,city,open_time,close_time,latitude,longitude,google_maps_url,active",
            sort: "-active",
            perPage: 500,
        });

        return cp;
    },
    refetchOnMount: false,
    staleTime: Infinity,
  });
};

const useAddCollectionPoint = () => {
  const mutation = useMutation({
    mutationFn: async (point: CollectionPoint) => {
      delete point.id;
      await PB.collection('collection_points').create(point);
    },
  });

  return mutation;
};

export { useGetCollectionPoints, useAddCollectionPoint };

export type { CollectionPoint };
