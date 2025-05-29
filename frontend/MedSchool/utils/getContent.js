// utility function, gets link or text content from json data
export const getContent = (data, name) => {
    const obj = data.find(item=> item.content_name === name);
    // returns "could not load content" if missing content, or if obj does not exist.
    return obj ? obj.text_content || obj.link_content || "Could not load content" : "Could not load content";
};