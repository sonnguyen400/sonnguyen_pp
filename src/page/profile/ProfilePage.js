import ProfileFunction from '~/component/main/ProfileFunction/ProfileFunction';
import Profile from '~/component/main/profile/Profile';
function ProfilePage() {
    return (
        <div className="flex flex-row -mx-2">
            <div className="w-1/4 px-2 h-fit">
                <Profile />
            </div>
            <div className="w-3/4 px-2">
                <ProfileFunction />
            </div>
        </div>
    );
}

export default ProfilePage;
