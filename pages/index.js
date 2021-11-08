import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/The_Perot_Museum_of_Nature_and_Science_in_Dallas%2C_Texas_LCCN2014633934.tif/lossy-page1-640px-The_Perot_Museum_of_Nature_and_Science_in_Dallas%2C_Texas_LCCN2014633934.tif.jpg',
        address: '2201 N Field St, Dallas, TX 75201',
        description: 'first meetup of the year',
    },
    {
        id: 'm2',
        title: 'Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dallas_County_Courthouse_-_Old_Red.jpg/556px-Dallas_County_Courthouse_-_Old_Red.jpg',
        address: '100 S Houston St, Dallas, TX 75202',
        description: 'second meetup of the year',
    },
];

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;