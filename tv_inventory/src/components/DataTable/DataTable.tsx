import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'show', headerName: 'TV Show', width: 130 },
    { field: 'season', headerName: 'Season', type: 'number', width: 90,},
    {field: 'episode', headerName: 'Episode', width: 130,},
    {field: 'rating', headerName: 'Rating', type: 'number', width:90,}
    
  ];

  const rows = [
    { id: 1, show: 'As Told By Ginger', season:1 , episode: 'My First Day', rating: 9},
    { id: 2, show: 'The Detroiters', season: 1, episode: 'Dream Cruise', rating:10 },
    { id: 3, show: '90 Day Fiance: Happily Ever After', season:6 , episode: 'Damage Control', rating:4 },
    { id: 4, show: 'This Is Us', season:5 , episode: 'The Adirondacks', rating:8 },
    { id: 5, show: 'Good Girls', season:4 , episode: 'Chef Boyardee', rating:7 },
  ];


  export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Operators Drone Inventory</h2>
          <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
      );
};