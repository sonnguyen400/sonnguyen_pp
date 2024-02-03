import Box from '~/component/base/box/Box';
import { Award, HeartF, Statistics, History } from 'icon';

function ProfileFunction() {
    return (
        <div className="flex -mx-2">
            <div className="w-1/5 p-2">
                <Box className="bg-[#F1E4C3] w-1/5">
                    <div className="flex justify-end">
                        <div className="rounded-full p-2 bg-[#EEEDEB] w-fit aspect-square">
                            <Award fill="#424769" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-regular">Award</label>
                        <div className="font-semibold">71.572</div>
                    </div>
                </Box>
            </div>
            <div className="w-1/5 p-2">
                <Box className="bg-red-200 w-1/5">
                    <div className="flex justify-end">
                        <div className="rounded-full p-2 bg-red-100 w-fit aspect-square">
                            <HeartF fill="#424769" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-regular">Love</label>
                        <div className="font-semibold">71.572</div>
                    </div>
                </Box>
            </div>
            <div className="w-1/5 p-2">
                <Box className="bg-[#D5F0C1] w-1/5">
                    <div className="flex justify-end">
                        <div className="rounded-full p-2 bg-[#FFFFEC] w-fit aspect-square">
                            <History fill="#424769" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-regular">Purchased</label>
                        <div className="font-semibold">71.572</div>
                    </div>
                </Box>
            </div>
        </div>
    );
}

export default ProfileFunction;
