import {StyleSheet, View, Text, ScrollView, SafeAreaView} from 'react-native';
import ClickableLink from '../components/clickable-link';
import DisplayImage from '../components/display-image';
import LoadingAnimation from '../components/loading-animation';
import { API_BASE_URL } from '../constants';
import useFetchData from '../hooks/useFetchData';
import { getContent } from '../utils/getContent';
const BASE_URL = API_BASE_URL + '/content/';
const SECTIONS = {
    GUSA: '?section=gusa',
    QMU: '?section=qmu',
    GUU: '?section=guu',
    SRC: '?section=src',
};

const RenderData = ({colour, header, image, description, link, linkText, textColour= 'white'}) => {
    return(
        // <View style={[styles.itemContainer, {backgroundColor: '#2567ae'}]}>
        <View style={[styles.itemContainer, {backgroundColor: colour}]}>
            <Text style={[styles.sectionHeader, {color:textColour}]}>{header}</Text>
            <View style={styles.pictureDescription}>
                <View style={{padding: 8,}}>
                    <DisplayImage image={image}/>
                </View>
                <Text style={[styles.textStyle, {color:textColour}]}>{description}</Text>
            </View>
            <ClickableLink url={link} linkText={linkText}/>
            
        </View>
    )    
}

const SRC = () => {
    const {data, loading} = useFetchData(BASE_URL + SECTIONS['SRC']);
    if (loading) {
        return <LoadingAnimation/>;
    }
    const srcDesc = getContent(data, "src-description");
    const srcLink = getContent(data, "src-link");

    return(
        <RenderData
            colour="#2567ae"
            header="Students' Representative Council"
            image="SRC-logo.png"
            description={srcDesc}
            link={srcLink}
            linkText="Go to SRC website"
        />
    );
};

const GUU = () => {
    const {data, loading} = useFetchData(BASE_URL + SECTIONS['GUU']);
    const guuDesc = getContent(data, "guu-description");
    const guuLink = getContent(data, "guu-link");

    if (loading) {
        return <LoadingAnimation/>;
    }

    return(
        <RenderData
            colour="#006630"
            header="Glasgow University Union"
            image="guu-logo.png"
            description={guuDesc}
            link={guuLink}
            linkText="Go to GUU website"
        />
    );

};

const QMU = () => {
    const {data, loading} = useFetchData(BASE_URL + SECTIONS['QMU']);
    if (loading) {
        return <LoadingAnimation/>;
    }
    const qmuDesc = getContent(data, "qmu-description");
    const qmuLink = getContent(data, "qmu-link");

    return(
        <RenderData
            colour="#5B4D94"
            header="Queen Margaret Union"
            image="qmu-logo.jpg"
            description={qmuDesc}
            link={qmuLink}
            linkText="Go to QMU website"
        />
    );

};

const GUSA = () => {
    const {data, loading} = useFetchData(BASE_URL + SECTIONS['GUSA']);

    if (loading) {
        return <LoadingAnimation/>;
    }
    const GUSADesc = getContent(data, "gusa-description");
    const GUSALink = getContent(data, "gusa-link");
    
    // text colour should be black
    return(
        <RenderData
            colour="#ffe31f"
            header="Glasgow University Sports Association"
            image="gusa-logo.jpg"
            description={GUSADesc}
            link={GUSALink}
            linkText="Find out more"
            textColour="black"
        />
    );
};

const StudentBodies = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <Text style={styles.screenInfoText}>Learn about student bodies on campus!</Text>
                    <SRC/>
                    <GUU/>
                    <QMU/>
                    <GUSA/>

                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        margin: 8,
        padding: 16,
        borderRadius: 4,
    },
    pictureDescription : {
        flexDirection: "row",
    },
    container: {backgroundColor: "white", flex: 1,},
    textStyle :{
        flex: 1,
        padding:8,
        color: 'white',
    },
    sectionHeader: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    screenInfoText: {
        fontSize: 18,
        padding: 16,

    },

})

export default StudentBodies;