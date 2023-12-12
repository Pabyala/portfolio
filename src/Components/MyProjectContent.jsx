import React, { useEffect, useState } from 'react'
import '../Pages/ProjectStyle.css'
import OnePiecePrjt from '../Asset/One Piece.png'
import IDGenerator from "../Asset/ID's Generator.png"
import GShortcut from "../Asset/GShortcut.png"
import MarFShoeStore from "../Asset/Min-Shoe-Store.png"
import WeatherApp from '../Asset/Weather-app.jpg'
import Movie from "../Asset/movie.png"
import { ProjectSkeleton } from '../Skeleton/SkeletonProject';
import { ProjectAnimation } from './AnimateComponent'
import { MyProjects } from './MyProjects';

const MyProjectContent = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
    return (
        <div className="row row-ga">
                {loading ? (<ProjectSkeleton/>)
                : (
                    <ProjectAnimation
                        customStyle='col-4 mt-4 h-auto'
                        customTransition={{ 
                            ease: 'easeInOut', 
                            duration: 1, 
                            delay: 0.5
                        }}
                    >
                        <MyProjects 
                            projectImg={OnePiecePrjt}
                            projectTitle={`One Piece`}
                            projectDescrip={`Provide a list of pirate groups, as well as the 
                                            ongoing story in the anime and the birthday list of each character.
                                            It also has a short quiz with 25 items.`}
                            projectTech={`ReactJs, CSS, Responsive Design`}
                            projectLiveDemo={`https://pabyala.github.io/onepiece/`}
                            projectCode={`https://github.com/Pabyala/onepiece`}
                        />
                    </ProjectAnimation>
                )}

                {loading ? (<ProjectSkeleton/>)
                : (
                    <ProjectAnimation
                        customStyle='col-4 mt-4'
                        customTransition={{ 
                            ease: 'easeInOut', 
                            duration: 1, 
                            delay: 0.6
                        }}
                    >
                        <MyProjects 
                            projectImg={IDGenerator}
                            projectTitle={`ID's Generator`}
                            projectDescrip={`This website generates 4 unique school IDs, and you can choose 
                                            the school you want.  All you need to do is fill up the form and 
                                            download your ID.`}
                            projectTech={`HTML, CSS, JavaScript, Responsive Design`}
                            projectLiveDemo={`https://pabyala.github.io/id-generator/`}
                            projectCode={`https://github.com/Pabyala/id-generator`}
                        />
                    </ProjectAnimation>
                )}

                {loading ? (<ProjectSkeleton/>)
                : (
                    <ProjectAnimation
                        customStyle='col-4 mt-4'
                        customTransition={{ 
                            ease: 'easeInOut', 
                            duration: 1, 
                            delay: 0.7
                        }}
                    >
                        <MyProjects 
                            projectImg={GShortcut}
                            projectTitle={`Google Shortcut`}
                            projectDescrip={`This "G-Shortcut" a platform enabling you to create 
                                            personalized shortcuts effortlessly. Just enter the name and 
                                            valid URL of your choice. Once added, easily click on these 
                                            shortcuts to access the webpages or sites.`}
                            projectTech={`ReactJs, CSS, Bootstrap, Responsive Design`}
                            projectLiveDemo={`https://pabyala.github.io/shortcut/`}
                            projectCode={`https://github.com/Pabyala/shortcut`}
                        />
                    </ProjectAnimation>
                )}

                {loading ? (<ProjectSkeleton/>)
                : (
                    <ProjectAnimation
                        customStyle='col-4 mt-4'
                        customTransition={{ 
                            ease: 'easeInOut', 
                            duration: 2, 
                            delay: 0.5
                        }}
                    >
                        <MyProjects 
                            projectImg={MarFShoeStore}
                            projectTitle={`MarF Shoe Store`}
                            projectDescrip={`It's an online shoe shop where you can choose your 
                                            favorite sneakers, adding them to your cart. The shop offers 
                                            four different brands of shoes: Nike, Adidas, Vans, and Converse.`}
                            projectTech={`ReactJs, CSS, Bootstrap, Responsive Design`}
                            projectLiveDemo={`https://pabyala.github.io/MarF.shoe-shop/`}
                            projectCode={`https://github.com/Pabyala/MarF.shoe-shop`}
                        />
                    </ProjectAnimation>
                )}

                {loading ? (<ProjectSkeleton/>)
                : (
                    <ProjectAnimation
                        customStyle='col-4 mt-4'
                        customTransition={{ 
                            ease: 'easeInOut', 
                            duration: 2, 
                            delay: 0.5
                        }}
                    >
                        <MyProjects 
                            projectImg={WeatherApp}
                            projectTitle={`Weather Forecast`}
                            projectDescrip={`It's a website that shows the current weather forecast and a 
                                            five-day forecast. You can also search for the country or city 
                                            that you want to see the weather for.`}
                            projectTech={`ReactJs, CSS, Bootstrap, Responsive Design`}
                            projectLiveDemo={`https://pabyala.github.io/weatherforecast-app/`}
                            projectCode={`https://github.com/Pabyala/weatherforecast-app`}
                        />
                    </ProjectAnimation>
                )}   

                {loading ? (<ProjectSkeleton/>)
                : (
                    <ProjectAnimation
                        customStyle='col-4 mt-4'
                        customTransition={{ 
                            ease: 'easeInOut', 
                            duration: 2, 
                            delay: 0.5
                        }}
                    >
                        <MyProjects 
                            projectImg={Movie}
                            projectTitle={`Movies Hub`}
                            projectDescrip={`It's a website where you can see popular movies and TV series. 
                                            Choose a genre, and it will display matching movies or TV series. 
                                            You can also use the search function to find your favorites movie 
                                            or TV series.`}
                            projectTech={`ReactJs, CSS, Bootstrap, Material UI, Responsive Design`}
                            projectLiveDemo={`https://m0vieshub.netlify.app`}
                            projectCode={`https://github.com/Pabyala/movies.hub`}
                        />
                    </ProjectAnimation>
                )}   
            </div>
  )
}

export default MyProjectContent