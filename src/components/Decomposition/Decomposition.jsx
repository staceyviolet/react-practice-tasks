import * as React from 'react'
import {TopMenu} from "./TopMenu";
import {HomePage} from "./HomePage";
import {Search} from "./Search";
import {Weather} from "./Weather";
import {MostVisited} from "./MostVisited";
import {TvShows} from "./TvShows";
import {NowOnline} from "./NowOnline";
import {NewsBlock} from "./NewsBlock";
import {Trading} from "./Trading";
import {Row} from "./Row";
import {Col} from "./Col";
import {NewsHeader} from "./NewsHeader";
import {Ad} from "./Ad";
import {Map} from "./Map";

const searchExample = "фаза луны сегодня"
const menuItems = [{path: '/', title: 'Видео'}]
const ad = { src: '/', title: 'Работа над ошибками', description: '' }
const weatherProps = { icon: '', currentTemp: '', morningTemp: '', dayTemp: '' }
const newsHeaderTabs = {now: "Cейчас в СМИ"}
const news = [{icon: '', link: '', text: ''}]
const mainIndexes = [{name: '', rate: '', trend: ''}]
const visited = [{title: 'Недвижимость', description: 'о сталинках'}]
const shows = [{time: '02:00', name: 'ТНТ. Best', channel: 'ТНТ International'}];
const programmes = [{icon: '.', name: 'Управление как искусство', channel: 'Успех'}];

export const Decomposition = () => {

    return (
        <HomePage logo={'/'}>
            <Row>
                <Col>
                    <NewsHeader tabs={newsHeaderTabs}/>
                    <NewsBlock news={news}/>
                    <Trading indexes={mainIndexes}/>
                </Col>

                <Col>
                    <Ad isYandexAd ad={ad}/>
                </Col>
            </Row>

            <TopMenu menuItems={menuItems}/>
            <Search searchExample={searchExample}/>
            <Ad ad={ad}/>

            <Row>
                <Col>
                    <Weather title={"Погода"} {...weatherProps}/>
                    <MostVisited title={"Посещаемое"} visited={visited}/>
                </Col>

                <Col>
                    <Map title={"Карта Германии"} link={'/'}/>
                    <TvShows title={"Телепрограмма"} shows={shows}/>
                </Col>

                <Col>
                    <NowOnline title={"Эфир"} programmes={programmes}/>
                </Col>
            </Row>
        </HomePage>
    )
}
