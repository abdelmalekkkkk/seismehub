import { memo } from "react";
import { Village } from "../../hooks/villages";
import { UserIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { ListChildComponentProps } from 'react-window'

type VillageItemData = {
    villages: Village[];
    onSelect: (village: Village) => void;
}

const VillageItem = ({ data, index, style } : ListChildComponentProps<VillageItemData>) => {
    const {villages, onSelect} = data;
    const { commune, name, population } = {...villages[index]};
    return <div onClick={() => onSelect(villages[index])} style={style} className="border-b border-gray-200 py-4 px-4 flex justify-between items-center hover:bg-gray-200 cursor-pointer">
        <div className="flex items-center">
            <MapPinIcon width="20" /> <div className="ml-2 text-sm">{commune} - {name}</div>
        </div>
        <div>
            <div className="flex items-center">
                <UserIcon width="15" className=" stroke-blue-600"/><span className="text-sm text-slate-600 ml-1">{population}</span>
            </div>
        </div>
    </div>
}

export default memo(VillageItem);