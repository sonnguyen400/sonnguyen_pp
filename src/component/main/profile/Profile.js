import ListItem from '../../base/ListItem/ListItem';
import Box from '../../base/box/Box';
import { InputEdit } from '../../base/input';
import { BirthdayCake, Envelope, PhoneOffice, Wallet, IdCard } from 'icon';
function Profile() {
    return (
        <>
            <Box>
                <div className="w-full px-10">
                    <div className="aspect-square rounded-full bg-blue-500"></div>
                </div>
                <div id="info">
                    <h4 className="text-center py-3">Lawson Taylor</h4>
                </div>
            </Box>
            <Box className="block text-gray-700">
                <InputEdit value="Lawson Taylor" icon={<IdCard />} />
                <InputEdit value="Lawson Taylor" icon={<Envelope />} />
                <InputEdit value="Lawson Taylor" icon={<PhoneOffice />} />
                <InputEdit value="Lawson Taylor" icon={<BirthdayCake />} />
                <ListItem icon={<Wallet />}>Payment Method</ListItem>
            </Box>
        </>
    );
}

export default Profile;
