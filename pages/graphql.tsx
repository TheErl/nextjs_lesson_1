import { NextPage } from "next";
import React from "react";
import { useQuery, gql, useMutation } from '@apollo/client';
import { LocationAPI } from "types/graphql";
import Error from "next/error";
import Rating from '@mui/material/Rating';
import { Box, Button, CircularProgress, Grid, Paper, styled, TextField, Typography, } from "@mui/material";

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
const loadersStyles = { display: 'flex', width: '100%', height: '80vh', justifyContent: 'center', alignItems: 'center' };

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'lightgray',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
const GraphqlPage: NextPage = () => {

    const { loading, error, data } = useQuery<{locations: LocationAPI[]}>(GET_LOCATIONS);
    const [createReview] = useMutation(CREATE_REVIEW, {refetchQueries: ['GetLocations']});

    const handleCreateReview = (locationId: number) => {
        createReview({
            variables: {
                "locationReview": {
                "comment": 'blbalbalba',
                "rating": 5,
                "locationId": locationId
                }
          }});
    }; 

    if (loading) return <Box sx={loadersStyles}>  <CircularProgress/> </Box>;
    if (error) return <p>Error</p>;
    if (!data?.locations) return <Error statusCode={404} />;
    console.log(data);
    return (
        <>
        <Box sx={{ flexGrow: 1 }} px={2}>
            <Grid container spacing={1}>
            {data.locations.map(({ id, name, description, photo, reviewsForLocation }) => (
                        <Grid key={id} item xs={4}>
                            <Item>
                        <h3 className="text-3xl font-bold text-dark-500">{name}</h3>
                        <img width="400" height="250" alt="location-reference" src={`${photo}`} />
                        <br />
                        <b>About this location:</b>
                        <p>{description}</p>
                        <Box sx={{width: '100%', display: "flex", justifyContent: 'space-around'}}>
                            <TextField size="small" label="Review text"/>
                            <Button className="bg-blue-500"  variant="contained" onClick={() => handleCreateReview(id)}>Create review</Button>
                        </Box>
                            <h4>Reviews for location</h4>
                            { reviewsForLocation.map(({id, comment, rating}) => (
                                <div key={id}>
                                    <p>ID : {id}</p>
                                    <p>comment : {comment}</p>
                                    <Typography component="legend">Rating</Typography>
                                    <Rating name="read-only" value={rating} readOnly />
                                </div>
                            )) }
                        </Item>
                    </Grid>
            ))}
                {/* <Grid item xs={4}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                <Item>xs=8</Item>
                </Grid> */}
            </Grid>
            </Box>
        
            {/* {data.locations.map(({ id, name, description, photo, reviewsForLocation }) => (
                <Box key={id}>

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
                                <Typography component="legend">Rating</Typography>
                                <Rating name="read-only" value={rating} readOnly />
                            </div>
                        )) }
                        <input type="text"></input>
                        <button onClick={handleCreateReview}>Create review</button>
                    </div>
                    <br />
                </Box>
            ))} */}
        </>
    );
};

export default GraphqlPage;