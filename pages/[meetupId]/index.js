import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail 
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/The_Perot_Museum_of_Nature_and_Science_in_Dallas%2C_Texas_LCCN2014633934.tif/lossy-page1-640px-The_Perot_Museum_of_Nature_and_Science_in_Dallas%2C_Texas_LCCN2014633934.tif.jpg'
            title='First Meetup'
            address='2201 N Field St, Dallas, TX 75201'
            description='First Meetup Location'
        />
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { 
                params: {
                    meetupId: 'm1',
            },
         },
            { 
                params: {
                    meetupId: 'm2',
            },
        },
        ],
    };
}

export async function getStaticProps(context) {
    // fetch data for a single meetup page

    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/The_Perot_Museum_of_Nature_and_Science_in_Dallas%2C_Texas_LCCN2014633934.tif/lossy-page1-640px-The_Perot_Museum_of_Nature_and_Science_in_Dallas%2C_Texas_LCCN2014633934.tif.jpg',
                id: 'meetupId',
                title: 'First Meetup',
                address: '2201 N Field St, Dallas, TX 75201',
                description: 'First Meetup Location'
            }
        }
    }
}

export default MeetupDetails;