import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Category = () => {
    return (
        <div>
            <h1 className="text-center text-[#00b4d8] text-5xl">See Our Collection By Category</h1>
            <Tabs className="flex flex-col items-center">
                <TabList className="flex my-5">
                    <Tab className="btn btn-sm btn-outline">Title 1</Tab>
                    <Tab className="btn btn-sm btn-outline mx-3">Title 2</Tab>
                    <Tab className="btn btn-sm btn-outline">Title 3</Tab>
                </TabList>
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;