import * as React from 'react'
import {TopMenu} from "./TopMenu";
import {HomePage} from "./HomePage";
import {Search} from "./Search";
import {Weather} from "./Weather";
import {MostVisited} from "./MostVisited";
import {TvShows} from "./TvShows";
import {NowOnline} from "./NowOnline";
import {NewsBlock} from "./NewsBlock";
import {TradeExchange} from "./TradeExchange";
import {Row} from "./Row";
import {Col} from "./Col";
import {NewsHeader} from "./NewsHeader";
import {Ad} from "./Ad";
import {Map} from "./Map";

const searchExample = "фаза луны сегодня"

export const Decomposition = ({}) => {
    return (
        <HomePage>
            <Row>
                <Col>
                    <NewsHeader newsHeader={{}}/>
                    <NewsBlock news={[]}/>
                    <TradeExchange exchanges={[]}/>
                </Col>

                <Col>
                    <Ad isYandexAd ad={{}}/>
                </Col>
            </Row>

            <TopMenu menuItems={menuItems}/>

            <Search searchExample={searchExample}/>

            <Ad ad={{}}/>

            <Row>
                <Col>
                    <Weather title={"Погода"} {...weatherProps}/>
                    <MostVisited title={"Посещаемое"} visited={[]}/>
                </Col>

                <Col>
                    <Map title={"Карта Германии"}/>
                    <TvShows title={"Телепрограмма"}/>
                </Col>

                <Col>
                    <NowOnline title={"Эфир"}/>
                </Col>
            </Row>
        </HomePage>
    )
}
