import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {Typography, Button, Divider, Icon} from '@material-ui/core';
import RadioButton from './ConsumerSurveyComponents/RadioButton';
import CheckBox from './ConsumerSurveyComponents/CheckBox';
import Calendar from './ConsumerSurveyComponents/Calendar';
import Email from './ConsumerSurveyComponents/Email';
import StarRating from './ConsumerSurveyComponents/StarRating';
import Signature from './ConsumerSurveyComponents/Signature';
import FullName from './ConsumerSurveyComponents/FullName';
import ThumbsUpDownSingle from './ConsumerSurveyComponents/ThumbsUpDownSingle';
import ThumbsUpDownMultiple from './ConsumerSurveyComponents/ThumbsUpDownMultiple';
import RatingScale from './ConsumerSurveyComponents/RatingScale';
import ImageType from './ConsumerSurveyComponents/ImageType';
import Dropdown from './ConsumerSurveyComponents/Dropdown';
import Ranking from './ConsumerSurveyComponents/Ranking';






const styles = theme => ({
    layoutRoot: {},
    root: {
        flexGrow: 1,
      },
      
      
});



  

class ConsumerSurveyLanding extends Component {

    state = {
        value: 'female',
        Cakes: false,
        Ambience: false,
        Free: false,
        Popular: false,
      };
    
    //   radio button
      handleDays = event => {
        this.setState({ value: event.target.value });
      };
    //   radio button ends

    
      //   checkbox
      handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };
    //   checkbox ends



    //   dropdown
   
    
    //   dropdown ends


    render()
    {
        const { Cakes, Ambience, Free, Popular } = this.state;
        const error = [Cakes, Ambience, Free, Popular].filter(v => v).length !== 3;
        
     
        return (
                <div className="container border-1 border-grey">
                    {/* header part */}
                        <div className="min-h-128 bg-green-darkest px-12">
                            <div className="flex p-16 items-center">
                                <img src={('../assets/images/logos/brand_logo.png')} className="w-96 bg-white p-12 mr-20" />
                                <Typography className="text-white text-20 font-800 leading-tight sm:text-24 capitalize ">Starbucks Customer Experience Survey</Typography>
                            </div>
                        </div>
                     {/* header part ends*/}

                     {/* About Survey */}
                        <div className="px-28 py-20">
                            <Typography className="text-green-darkest text-18 font-bold sm:text-22">About Survey</Typography>
                            <Typography className="text-16 text-grey-darkest pt-6">Hello, we are three ungraduate students from the American University of Dubai and we would really appreciate it if you complete this survey with your honest opinion about Starbucks. Note that the survey will be strictly confidential, your identity will stay anonymous.The survey consists of 25 questions it will take you 5-7 minutes. We would like to thank you in advance for participating on our survey.</Typography>                           
                        </div>
                        <Divider className="border-grey" />
                     {/* About Survey ends*/}

                     {/* Purpose */}
                        <div className="px-28 py-20">
                            <Typography className="text-green-darkest text-18 font-bold sm:text-22">Purpose</Typography>
                            <Typography className="text-16 text-grey-darkest pt-6">This survey to help us better understand customers experience with Starbucks.</Typography>    
                         </div>
                        <Divider className="border-grey" />
                     {/* Purpose ends*/}

                     {/* survey questions */}
                     

                     <div className="px-28 py-20">

                        <Grid container spacing={12}>                               

                                {/* radiobuttn question*/}
                                <Grid item xs={12} className="pb-72">
                                    <RadioButton />
                                </Grid>
                                {/* radiobuttn question ends*/}
                                

                                {/* checkbox question */}
                                <Grid item xs={12} className="pb-72">
                                    <CheckBox />
                                </Grid>
                                {/* checkbox question ends*/}


                                {/* Thumbs up single  */}
                                <Grid item xs={12} className="pb-72">
                                    <ThumbsUpDownSingle />
                                </Grid>

                                {/* Thumbs up single ends */}


                                {/* Thumbs up multiple  */}
                                <Grid item xs={12} className="pb-72">
                                    <ThumbsUpDownMultiple />
                                </Grid>

                                {/* Thumbs up multiple ends */}


                                {/* dropdown question */}
                                <Grid item xs={12} className="pb-72">
                                    <Dropdown />
                                </Grid>
                                {/* dropdown question ends*/}


                                {/* imagetype */}
                                <Grid item xs={12} className="pb-72">
                                    <ImageType />
                                </Grid>
                                {/* imagetype ends */}


                                {/* ranking scale*/}
                                <Grid item xs={12} className="pb-72">
                                    <RatingScale />
                                </Grid>
                                {/* ranking scale ends */}
                            


                                {/* star rating */}
                                <Grid item xs={12} className="pb-72">
                                    <StarRating />
                                </Grid>
                                {/* star rating ends*/}


                                {/* ranking */}
                                <Grid item xs={12} className="pb-72">
                                    <Ranking />
                                </Grid>
                                {/* ranking ends */}
                                


                                {/* email id */}
                                <Grid item xs={12} className="pb-72">
                                    <Email />
                                </Grid>
                                {/* email id ends */}


                                {/* FullName */}
                                <Grid item xs={12} className="pb-72">
                                    <FullName />
                                </Grid>
                                {/* FullName ends */}
                                

                                


                                {/* calender question */}
                                <Grid item xs={12} className="pb-72">                                   
                                    <Calendar />
                                </Grid>
                                {/* calender question ends*/}

                                {/* Signature  */}
                                <Grid item xs={12} className="">
                                    <Signature />
                                </Grid>
                                {/* Signature ends */}
                                
                            
                        </Grid>


                         




                        
                        


                        </div>
                    
                     {/* survey questions ends */}
                </div>
            
        )
    }
}



export default ConsumerSurveyLanding;