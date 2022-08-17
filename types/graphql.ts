export type ReviewAPI = {
    id: string;
    comment: string;
    rating: number;
}

export type LocationAPI = {
    id: number;
    name: string;
    description: string;
    photo: string;
    reviewsForLocation: ReviewAPI[];
}