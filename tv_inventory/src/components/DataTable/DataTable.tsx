import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import {useGetData} from '../../custom-hooks'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'show', headerName: 'TV Show', width: 150 },
    { field: 'season', headerName: 'Season', type: 'number', width: 130,},
    {field: 'episode', headerName: 'Episode', width: 130,},
    {field: 'rating', headerName: 'Rating', type: 'number', width:130,}
    
  ];

  const rows = [
    { id: 1, show: 'As Told By Ginger', season:1 , episode: 'My First Day', rating: 9},
    { id: 2, show: 'The Detroiters', season: 1, episode: 'Dream Cruise', rating:10 },
    { id: 3, show: '90 Day Fiance: Happily Ever After', season:6 , episode: 'Damage Control', rating:4 },
    { id: 4, show: 'This Is Us', season:5 , episode: 'The Adirondacks', rating:8 },
    { id: 5, show: 'Good Girls', season:4 , episode: 'Chef Boyardee', rating:7 },
  ];


  export const DataTable = () => {
    let{reviewData, getData} = useGetData();
    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Your Tv Reviews</h2>
          <DataGrid rows={reviewData} columns={columns} pageSize={5} checkboxSelection />
        </div>
      );
};