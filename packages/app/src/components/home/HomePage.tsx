import React from 'react';
import {
    HomePageRandomJoke,
    WelcomeTitle,
    HeaderWorldClock,
    ClockConfig,
    HomePageStarredEntities,
    HomePageCompanyLogo,

} from '@backstage/plugin-home';
import { HomePageStackOverflowQuestions } from '@backstage/plugin-stack-overflow';

import { Grid } from '@material-ui/core';
import { Content, Header, Page } from '@backstage/core-components';
import { HomePageSearchBar } from '@backstage/plugin-search';

const clockConfigs: ClockConfig[] = [
    {
        label: 'NYC',
        timeZone: 'America/New_York',
    },
    {
        label: 'UTC',
        timeZone: 'UTC',
    },
    {
        label: 'STO',
        timeZone: 'Europe/Stockholm',
    },
    {
        label: 'TYO',
        timeZone: 'Asia/Tokyo',
    },
    {
        label: 'WAT',
        timeZone: 'Africa/Lagos',
    }
];

const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
};

export const homePage = (
    <Page themeId="home">
        <Header title={<WelcomeTitle />} pageTitleOverride="Home">
            <HeaderWorldClock
                clockConfigs={clockConfigs}
                customTimeFormat={timeFormat}
            />
        </Header>
        <Content>
            <Grid>
                <HomePageCompanyLogo />
                <WelcomeTitle />
                <HomePageSearchBar />

                <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>
                        <HomePageStarredEntities />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <HomePageRandomJoke />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <HomePageStackOverflowQuestions
                            requestParams={{
                                tagged: 'backstage',
                                site: 'stackoverflow',
                                pagesize: 5,
                            }}
                        />
                    </Grid>

                </Grid>

            </Grid>
        </Content>
    </Page>
);