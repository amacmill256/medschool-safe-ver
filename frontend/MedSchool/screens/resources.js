import {View, SafeAreaView, ScrollView} from 'react-native';
import CollapsibleSection from '../components/collapsible-section';
import ClickableLink from '../components/clickable-link';
import LoadingAnimation from '../components/loading-animation';
import { API_BASE_URL } from '../constants';
import useFetchData from '../hooks/useFetchData';

const BASE_URL = API_BASE_URL + 'resources/';

const ResourceItem = ({title, link}) => {
    return(
        <CollapsibleSection title={title}>
            <ClickableLink url={link} linkText={'Find out more'}/>
        </CollapsibleSection>
    )
};

const Resources = () => {
    const {data, loading} = useFetchData(BASE_URL);
    if (loading) {
        return <LoadingAnimation/>;
    }

    return (
        <View>
            <SafeAreaView>
                <ScrollView>
                    {data.map((resource, index) =>(
                        <View key={index}>
                            <ResourceItem title={resource.section_name} link={resource.link_content}/>
                        </View>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default Resources;