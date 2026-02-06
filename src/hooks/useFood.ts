import { useQuery } from '@tanstack/react-query';
import { api } from '../../services';

export const useFoodList = () => {
    return useQuery({
        queryKey: ['foodList'],
        queryFn: () => api.food.getFoodList(),
    });
};
