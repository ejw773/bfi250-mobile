import React from 'react';
import { ScrollView, Text, View, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

const About = () => {
    
    const techs = [
        {
            techName: 'React',
            link: '',
            image: ''
        },
        {
            techName: 'Redux',
            link: '',
            image: ''
        },
        {
            techName: 'Bootstrap',
            link: '',
            image: ''
        },
        {
            techName: 'Node',
            link: '',
            image: ''
        },
        {
            techName: 'Express',
            link: '',
            image: ''
        },
        {
            techName: 'MongoDB',
            link: '',
            image: ''
        },
    ]

    const repos = [
        {
            repo: 'Frontend',
            location: ''
        },
        {
            repo: 'Backend',
            location: ''
        },
        {
            repo: 'Mobile App',
            location: ''
        }
    ]

    const socialMedia = [
        {
            media: "LinkedIn",
            icon: "",
            link: ""
        },
        {
            media: "Twitter",
            icon: "",
            link: ""
        },
        {
            media: "Portfolio",
            icon: "",
            link: ""
        },

    ]

    return (
        <ScrollView>
            <Card>
                <Card.Title>About the BFI 250 Progress Bar</Card.Title>
                <Card.Divider />
                <Text style={{margin: 10}}>
                    Each decade since 1952, the British Film Institute's Sight and Sound Magazine has been putting out a carefully compiled list of the greatest films of all time. The published lists are usually 10 titles long, but in 2012 they put out a whopping 250 titles.
                </Text>
                <Text style={{margin: 10}}>
                    I wanted a tool to help me track my way through the list. I had three basic criteria:
                </Text>
                <Text style={{margin: 10}}>
                    * A visually simple progress bar. This tool does ONE thing.
                </Text>                
                <Text style={{margin: 10}}>
                    * Mobile-friendly.
                </Text>
                <Text style={{margin: 10}}>
                    * A button to "Skip" films I don't intend to see.
                </Text>

            </Card>
            <Card>
                <Card.Title>Technologies</Card.Title>
                <Card.Divider />
                <FlatList />
            </Card>
            <Card>
                <Card.Title>Deployment</Card.Title>
                <Card.Divider />
                <Text>The frontend is hosted on SiteGround, the backend is hosted on Heroku, and the app is availabe on Expo Snack.</Text>
            </Card>
            <Card>
                <Card.Title>Code</Card.Title>
                <Card.Divider />
                <FlatList />
            </Card>
            <Card>
                <Card.Title>Me</Card.Title>
                <Text>
                    I am a full-stack developer based out of Greenville, South Carolina, with a passion for cinema and for learning new things.
                </Text>

            </Card>
        </ScrollView>
    )
}

export default About