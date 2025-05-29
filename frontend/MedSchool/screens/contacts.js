import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import CollapsibleSection from '../components/collapsible-section';
import ClickableLink from '../components/clickable-link';
import LoadingAnimation from '../components/loading-animation';
import DisplayImage from '../components/display-image';
import useFetchData from '../hooks/useFetchData';
import { getContent } from '../utils/getContent';
// Constants
import { API_BASE_URL } from '../constants';


// extract this?
const SECTIONS = {
    GAPStaff: 'GAPStaff/',
    AdviserOfStudies: 'content/?section=adviser-of-studies',
    SRCAdviceCentre: 'content/?section=advice-centre',
    SRCReps: 'SRCReps/',
    Nightline: 'content/?section=nightline',
    CAPS: 'content/?section=CAPS',
    Disability: 'content/?section=disability-service',
    Careers: 'content/?section=careers-service',
    StudentSupport: 'content/?section=student-support'
  };

const RenderParagraph = ({descriptionText}) => {
    return(
        <View>
            {descriptionText.split('\n').map((paragraph, index) => (
                <Text key={index} style={styles.sectionBodyText}>{paragraph}</Text>
            ))}
        </View> 
    )
}

// GAP Staff info from backend
const GAPStaff = () => {
    const {data, loading} = useFetchData(API_BASE_URL + SECTIONS['GAPStaff']);  
    if (loading) {
      return <LoadingAnimation/>;
    } 
    return (
      <View>
        {data.map((staff, index) => (
          <View key={index} style={styles.GAPContactContainer}>
            <Text style={styles.GAPContactText}>{staff.title}</Text>
            <Text style={styles.GAPContactText}>{staff.name}</Text>
            <Text style={styles.GAPContactText}>{staff.email}</Text>
          </View>
        ))}
      </View>
    );
  };

const AdviserOfStudies = () => {
  const {data, loading} = useFetchData(API_BASE_URL + SECTIONS['AdviserOfStudies']);    
  if (loading) {
    return <LoadingAnimation/>;
  }
  const adviserDescription = getContent(data, "adviser-description");
  const myCampusLink = getContent(data, "mycampus-link");

  return (
    <View>
       <RenderParagraph descriptionText={adviserDescription}/>
        <View>
            <DisplayImage image = {'adviser-info.png'}/>
        </View>
        <View>
            <ClickableLink url = {myCampusLink} linkText={"Go to MyCampus"}/>
        </View>
    </View>
  );
  
};

const StudentSupport = () => {
    const {data, loading} = useFetchData(API_BASE_URL + SECTIONS['StudentSupport']);
    if (loading) {
        return <LoadingAnimation/>;
    }    
    const supportDescription = getContent(data, "student-support-description");
    return(
        <View>
            <RenderParagraph descriptionText={supportDescription}/>           
        </View>
    )
}

const SRCAdviceCentre = () => {
    const { data, loading } = useFetchData(API_BASE_URL + SECTIONS['SRCAdviceCentre']);
    if (loading) {
        return <LoadingAnimation/>;
    }    
    const adviceLink = getContent(data, "advice-centre-link");
    const adviceDescription = getContent(data, "advice-centre-description");

    return(
        <View>
            <RenderParagraph descriptionText={adviceDescription}/>          
            <View>
                <ClickableLink url={adviceLink} linkText={"Go to Advice Centre webstie"}/>
            </View>
        </View>
    )
}

const SRCReps = () => {
    // fetched data and loading status
    const { data, loading } = useFetchData(API_BASE_URL + SECTIONS['SRCReps']);

    if (loading) {
        return <LoadingAnimation/>;
    }
    return (
        <View>
            {data.map((rep, index) =>(
                <View key={index} style={styles.GAPContactContainer}>
                    <Text style={styles.GAPContactText}>{rep.rep_title}</Text>
                    <Text style={styles.GAPContactText}>{rep.rep_email}</Text>
                </View>
            ))}
        </View>
      );
    
}

const Nightline = () => {
    const { data, loading } = useFetchData(API_BASE_URL + SECTIONS['Nightline']);
    if (loading) {
        return <LoadingAnimation/>;
    }
    const nightlineLink = getContent(data, "nightline-link");
    const nightlineDescription = getContent(data, "nightline-description");
 
    return(
        <View>
            <RenderParagraph descriptionText={nightlineDescription}/>
            <View>
                <ClickableLink url={nightlineLink} linkText={"Go to Nightline website"}/>
            </View>             
        </View>
    )
}

const CAPS = () => {
    const { data, loading } = useFetchData(API_BASE_URL + SECTIONS['CAPS']);
    if (loading) {
        return <LoadingAnimation/>;
    }
    const CAPSdescription = getContent(data, "CAPS-description");
    const CAPSLink = getContent(data, "CAPS-link");
 
    return(
        <View>
            <RenderParagraph descriptionText={CAPSdescription}/>
            <View>
                <ClickableLink url={CAPSLink} linkText={"Find Out More"}/>
            </View>             
        </View>
    )
}

const DisabilityService = () => {
    const { data, loading } = useFetchData(API_BASE_URL + SECTIONS['Disability']);
    if (loading) {
        return <LoadingAnimation/>;
    }
    const disabilitydescription = getContent(data, "disability-service-description");
    return(
        <View>
            <RenderParagraph descriptionText={disabilitydescription}/>
        </View>
    )
}

const CareersService = () => {
    
    const { data, loading } = useFetchData(API_BASE_URL + SECTIONS['Careers']);
    if (loading) {
        return <LoadingAnimation/>;
    }
    const careersDescription = getContent(data, "careers-service-description");
    
    return(
        <View>
            <RenderParagraph descriptionText={careersDescription}/>
        </View>
    )
  
}

const Contacts = () => {
    return (
        <View style={styles.container}>
            <View style={{marginLeft:0,}}>
                <ScrollView>
                    <View>
                        <Text style={styles.screenInfoText}>Here you will find information about important contacts you may need throughout your time at university.</Text>
                    </View>
                        <CollapsibleSection title="Key GAP Staff">
                            <GAPStaff/>
                        </CollapsibleSection>
                        <CollapsibleSection title="Student Support">
                            <StudentSupport/>
                        </CollapsibleSection>
                        <CollapsibleSection title="Adviser of Studies">
                            <AdviserOfStudies/>
                        </CollapsibleSection>
                        <CollapsibleSection title="SRC Advice Centre">
                            <SRCAdviceCentre/>
                        </CollapsibleSection>
                        <CollapsibleSection title="Student Representatives">
                            <SRCReps/>
                        </CollapsibleSection>
                        <CollapsibleSection title="Student Nightline">
                            <Nightline/>
                        </CollapsibleSection>
                        <CollapsibleSection title="Counselling and Psychological Services">
                            <CAPS/>
                        </CollapsibleSection>
                        <CollapsibleSection title="Disability Service">
                            <DisabilityService/>
                        </CollapsibleSection>
                        <CollapsibleSection title="Careers Service">
                            <CareersService/>
                        </CollapsibleSection>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'white',
    },
    
    screenInfoText: {
        fontSize: 18,
        padding: 16,
    },

    sectionHeader: {
        fontSize: 20,
        marginTop : 20,
        marginBottom: 16,
        color: 'white',
    },

    sectionBodyText: {
        fontSize: 16,
        marginBottom: 16,
        color: 'white',

    },

    sectionContainer: {
        margin: 8,
        padding:16,
        backgroundColor: '#003865',
    },

    GAPContactContainer: {
        padding: 8,
    },

    GAPContactText:{
        fontSize: 16,
        color: 'white',
    },

})

export default Contacts;
