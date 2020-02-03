import React from 'react';
import ReactSelect from 'react-select';
import picOne from '../picOne.png';
import picTwo from '../picTwo.png';
import picThree from '../picThree.png';
import Card from './Card';

const Content = () => {

    const styleForSelect = {

        menu: () => ({width:'100px', overFlowx:'auto',border:'none'}),
        container: () => ({ width:'150px', cursor:'pointer',marginLeft:'0rem',marginRight:'0.5rem',overFlowx:'auto',border:'0px solid'})
    };

    return (
        <div 
            style = {{
                marginTop:'3rem', 
                marginLeft:'100px', 
            }}
        >
            <div style = {{display:'flex'}}>
                <div style = {{ 
                        fontSize:'14px',
                        backgroundColor:'#EAF7F1', 
                        paddingBottom:'0px',
                        paddingTop:'10px', 
                        paddingLeft:'10px',
                        paddingRight:'10px',
                        borderRadius:'160px',
                        fontWeight:'700',
                        height:'30px',
                        fontFamily:'Gilroy',
                        cursor:'pointer'
                    }}
                >
                    Everything
                </div>
                <div style = {{ 
                        fontSize:'14px', 
                        paddingBottom:'0px',
                        paddingTop:'10px', 
                        paddingLeft:'10px',
                        paddingRight:'10px',
                        borderRadius:'160px',
                        fontWeight:'700',
                        height:'30px',
                        fontFamily:'Gilroy',
                        color:'gray',
                        cursor:'pointer'
                    }}
                >
                    Live Auction
                </div>
                <div style = {{ 
                        fontSize:'14px',
                        color:'gray',
                        paddingBottom:'0px',
                        paddingTop:'10px', 
                        paddingLeft:'10px',
                        paddingRight:'10px',
                        borderRadius:'160px',
                        fontWeight:'700',
                        height:'30px',
                        fontFamily:'Gilroy',
                        cursor:'pointer'
                    }}
                >
                    Eligible for Auction
                </div>
                <div style = {{  
                        fontSize:'14px',
                        color:'gray',
                        paddingBottom:'0px',
                        paddingTop:'10px', 
                        paddingLeft:'10px',
                        paddingRight:'10px',
                        borderRadius:'160px',
                        fontWeight:'700',
                        height:'30px',
                        fontFamily:'Gilroy',
                        cursor:'pointer'
                    }}
                >
                    Buy now only
                </div>
                <div 
                    style = {{  
                        paddingBottom:'0px',
                        paddingTop:'10px', 
                        paddingLeft:'15px',
                        paddingRight:'15px',
                        borderRadius:'160px',
                        fontWeight:'700',
                        height:'30px',
                        fontFamily:'Gilroy',
                        marginLeft:'10rem',
                        fontSize:'14px'
                    }}
                >
                    Sort By: 
                </div>
                <div>
                    <ReactSelect 
                        styles = {styleForSelect}
                        placeholder = 'Lowest Price'
                    />
                </div>
            </div><br/>
            <div style = {{display:'flex'}}>
                <Card 
                    src = {picOne}
                    views = {'435'} 
                    type = {'NEW'} 
                    auct = {'LIVE AUCTION'}
                    desc = {'Original iPhone Boxes By Apple Liquidation Lot'}
                    days = {'3 days left'}
                    cb = {'200'}
                    msrp = {'500'}
                    unit = {'20'}
                />
                <Card   
                    src = {picTwo}
                    views = {'565'} 
                    type = {'USED'} 
                    auct = {'ELIGIBLE FOR AUCTION'}
                    desc = {'2 Players RC Battle Boxing Robots by Shift3'}
                    days = {''}
                    cb = {'1200'}
                    msrp = {'4000'}
                    unit = {'346'}
                />
                <Card 
                    src = {picThree} 
                    auct = {'NEWLY LISTED'}
                    desc = {'Speakers,LED Lights, DVD Players, Printers, and More Electronics...'}
                    days = {''}
                    cb = {'9200'}
                    msrp = {'12000'}
                    unit = {'60'}
                />
            </div>
            <div>
            <button 
                        style ={{
                            backgroundColor: '#FFFFFF',
                            color:'#00BD76',
                            fontFamily: 'Gilroy',
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '17px',
                            height:'40px',
                            width: '98%',
                            textAlign: 'center',
                            borderRadius:'4px',
                            border:'1px solid',
                            marginTop:'5rem',
                            cursor:'pointer'
                        }}
                    > Load More 
                </button>
            </div>
        </div>
    )
}

export default Content;
