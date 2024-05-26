import React from "react";
import classes from"./home.module.css"
import { SiYoutubemusic } from "react-icons/si";

const Home=()=>{

    return(
        <div className={classes.home}>
            <div className={classes.upper}>
                <h1>The Generics</h1>
                <div className={classes.content1}>
                  Get Our Latest Album
                </div>
                <div className={classes.logo}>
                  <SiYoutubemusic />
                </div>

            </div>
            <div className={classes.lower}>
               <h1>Tour</h1>
               <table>
                    <tr>
                        <td>JUL16</td>
                        <td>DETROIT, MI</td>
                        <td>DTE ENERGY MUSIC THEATRE</td>
                        <td><button>BUY TICKETS</button></td>
                    </tr>
                    <tr>
                        <td>JUL19</td>
                        <td>TORONTO,ON</td>
                        <td>BUDWEISER STAGE</td>
                        <td><button>BUY TICKETS</button></td>
                    </tr>
                    <tr>
                        <td>JUL 22</td>
                        <td>BRISTOW, VA</td>
                        <td>JIGGY LUBE LIVE</td>
                        <td><button>BUY TICKETS</button></td>
                    </tr>
                    <tr>
                        <td>JUL 29</td>
                        <td>PHOENIX, AZ</td>
                        <td>JIGGY LUBE LIVE</td>
                        <td><button>BUY TICKETS</button></td>
                    </tr>
                    <tr>
                        <td>AUG 2</td>
                        <td>LAS VEGAS, NV</td>
                        <td>T-MOBILE ARENA</td>
                        <td><button>BUY TICKETS</button></td>
                        
                    </tr>
                    <tr>
                        <td>AUG 7</td>
                       <td>CONCORD, CA</td>
                        <td>CONCORD PAVILION</td>
                        <td><button>BUY TICKETS</button></td>
                        
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Home;