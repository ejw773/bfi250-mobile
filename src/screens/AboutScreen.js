import React from 'react';
import { ScrollView, Text, Linking, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Card } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

const About = () => {
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
                    * A "Skip" button for films I don't intend to see.
                </Text>

            </Card>
            <Card>
                <Card.Title>Technologies</Card.Title>
                <Card.Divider />
                <Text>* React</Text>
                <Text>* Redux</Text>
                <Text>* Bootstrap</Text>
                <Text>* Node</Text>
                <Text>* Express</Text>
                <Text>* MongoDB</Text>
                <Text>* Mongoose</Text>
            </Card>
            <Card>
                <Card.Title>Deployment</Card.Title>
                <Card.Divider />
                <Text>The frontend is hosted on SiteGround, the backend is hosted on Heroku, and the app is availabe on Expo Snack.</Text>
            </Card>
            <Card>
                <Card.Title>Code <Ionicons name='logo-github' /> </Card.Title>
                <Card.Divider />
                <Button
                    title="Frontend on GitHub"
                    style={styles.linkButton} 
                    onPress={() => Linking.openURL('https://github.com/ejw773/bfi250')}
                />
                <Button
                    title="Backend on GitHub"
                    style={styles.linkButton} 
                    onPress={() => Linking.openURL('https://github.com/ejw773/bfi250-node-server')}
                />
                <Button
                    title="Mobile on GitHub"
                    style={styles.linkButton} 
                    onPress={() => Linking.openURL('https://github.com/ejw773/bfi250-mobile')}
                />
                <Button
                    title="Mobile on Expo Snack"
                    style={styles.linkButton} 
                    onPress={() => Linking.openURL('https://snack.expo.dev/@ejw773/github.com-ejw773-bfi250-mobile')}
                />
                <Button
                    title="BFI250.com"
                    style={styles.linkButton} 
                    onPress={() => Linking.openURL('https://bfi250.com/')}
                />
            </Card>
            <Card>
                <Card.Title>Me</Card.Title>
                <Card.Divider />
                <Text style={styles.marginBottom}>
                    I am a full-stack developer based out of Greenville, South Carolina, with a passion for cinema and for learning new things.
                </Text>
                <Card.Divider />
                <Button
                    title="elijahwilcott.com"
                    style={styles.linkButton} 
                    onPress={() => Linking.openURL('https://www.elijahwilcott.com/')}
                />
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    linkText: {
        color: 'blue',
        textAlign: 'center'
    },
    marginBottom: {
        marginBottom: 10
    },
    linkButton: {
        marginBottom: 10
    }
})

export default About