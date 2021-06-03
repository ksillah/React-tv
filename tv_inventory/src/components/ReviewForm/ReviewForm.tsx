import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseEpisode, chooseRating, chooseSeason, chooseShow } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface ReviewFormProps {
    id?:string;
    data?:{}
}

interface ReviewState {
    episode: string;
    show: string;
    rating: number;
    season: number;
}

export const ReviewForm = (props:ReviewFormProps) => {

    const dispatch = useDispatch();
    let { reviewData, getData } = useGetData();
    const store = useStore()
    const episode = useSelector<ReviewState>(state => state.episode)
    const show = useSelector<ReviewState>(state => state.show)
    const rating = useSelector<ReviewState>(state => state.rating)
    const season= useSelector<ReviewState>(state => state.season)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            
        } else {
            dispatch(chooseEpisode(data.episode))
            dispatch(chooseShow(data.show))
            dispatch(chooseRating(data.rating))
            dispatch(chooseSeason(data.season))
            server_calls.create(store.getState())
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="show">Show</label>
                    <Input {...register('show')} name="show" placeholder="TV Show"/>
                </div>
                <div>
                    <label htmlFor="season">Season</label>
                    <Input {...register('season')} name="season" placeholder="Season"/>
                </div>
                <div>
                    <label htmlFor="episode">Episode Title</label>
                    <Input {...register('episode')} name="episode" placeholder='Episode Title' />
                </div>
                
                <div>
                    <label htmlFor="rating">Episode Rating</label>
                    <Input {...register('rating')} name="rating" placeholder="Episode Rating"/>
                </div>
                
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
