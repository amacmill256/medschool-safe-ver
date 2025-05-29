import { API_BASE_URL } from "../constants";
import useFetchData from "../hooks/useFetchData";

const Contact = ({endpoint, descriptionContentName, linkContentName, linkText}) => {
    const { data, loading } = useFetchData(endpoint);
    const descriptionObj = data.find(item => item.content_name === descriptionContentName);
    const description = descriptionObj ? descriptionObj.text_content : '';
    const linkObj = data.find(item => item.content_name === linkContentName);
    const link = linkObj ? linkObj.link_content : '';


    if (loading) {
        return <LoadingAnimation/>;
      }

    return(
        <View>
            <View>
                {description.split('\n').map((paragraph, index) => (
                    <Text key={index} style={styles.sectionBodyText}>{paragraph}</Text>
                ))}
            </View>
            <View>
                <ClickableLink url={link} linkText={linkText}/>
            </View>             
        </View>
    )
};

export default Contact;

    // const { data, loading } = useFetchData(API_BASE_URL + SECTIONS['Nightline']);
    // const nightlineDescriptionObj = data.find(item => item.content_name === "nightline-description");
    // const nightlineDescription = nightlineDescriptionObj ? nightlineDescriptionObj.text_content : '';
    // const nightlineLinkObj = data.find(item => item.content_name === "nightline-link");
    // const nightlineLink = nightlineLinkObj ? nightlineLinkObj.link_content : '';


    // if (loading) {
    //     return <LoadingAnimation/>;
    //   }

    // return(
    //     <View>
    //         <View>
    //             {nightlineDescription.split('\n').map((paragraph, index) => (
    //                 <Text key={index} style={styles.sectionBodyText}>{paragraph}</Text>
    //             ))}
    //         </View>
    //         <View>
    //             <ClickableLink url={nightlineLink} linkText={"Go to Nightline website"}/>
    //         </View>             
    //     </View>
    // )
