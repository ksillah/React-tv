import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import {useGetData} from '../../custom-hooks'
import { makeStyles } from '@material-ui/core';
import {Theme, createStyles} from '@material-ui/core';
import netflix_image from '../../assests/images/netflix.jpg';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'show', headerName: 'TV Show', width: 150 },
    { field: 'season', headerName: 'Season', type: 'number', width: 130,},
    {field: 'episode', headerName: 'Episode', width: 130,},
    {field: 'rating', headerName: 'Rating', type: 'number', width:130,}
    
  ];

const useStyles = makeStyles( (theme:Theme) =>
  createStyles({
  main: {
    //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${netflix_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
  },
}));

  export const DataTable = () => {
    let{reviewData, getData} = useGetData();
    const classes = useStyles();
    return (
        <div style={{ height: 400, width: '100%' }}>
          <main className={classes.main}>
          <h2>Your Tv Ratings</h2>
          <DataGrid rows={reviewData} columns={columns} pageSize={5} checkboxSelection />
          </main>
        </div>
      );
};