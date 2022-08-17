import { NextPage } from "next";
import React from "react";
import { useQuery, gql, useMutation } from '@apollo/client';
import { LocationAPI } from "types/graphql";
import Error from "next/error";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
        name
        id
        description
        photo
        reviewsForLocation {
          id
          comment
          rating
        }
    }
  }
`;

const CREATE_REVIEW = gql`
    mutation SubmitReview($locationReview: LocationReviewInput) {
        submitReview(locationReview: $locationReview) {
            code
            success
            message
        }
    }
`;


const GraphqlPage: NextPage = () => {

    const { loading, error, data } = useQuery<{locations: LocationAPI[]}>(GET_LOCATIONS);
    const [createReview] = useMutation(CREATE_REVIEW, {refetchQueries: ['GetLocations']});

    const handleCreateReview = () => {
        createReview({
            variables: {
                "locationReview": {
                "comment": 'blbalbalba',
                "rating": 5,
                "locationId": 'loc-1'
                }
          }});
    }; 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    if (!data?.locations) return <Error statusCode={404} />;
    
    return (
        <>
            {data.locations.map(({ id, name, description, photo, reviewsForLocation }) => (
                <div key={id}>
                    <h3>{name}</h3>
                    <img width="400" height="250" alt="location-reference" src={`${photo}`} />
                    <br />
                    <b>About this location:</b>
                    <p>{description}</p>
                    <div>
                        <h4>Reviews for location</h4>
                        { reviewsForLocation.map(({id, comment, rating}) => (
                            <div key={id}>
                                <p>ID : {id}</p>
                                <p>comment : {comment}</p>
                                <p>rating : {'☆'.repeat(rating)}</p>
                            </div>
                        )) }
                        <input type="text"></input>
                        <button onClick={handleCreateReview}>Create review</button>
                    </div>
                    <br />
                </div>
            ))}
        </>
    );
};

export default GraphqlPage;