import { createRef, memo, useLayoutEffect, useRef } from "react";
import { Village } from "../../hooks/villages";
import VillageItem from "../VillageItem";
import { FixedSizeList as List } from 'react-window';
import memoize from "memoize-one";

type MapResultsProps = {
    villages: Village[];
    onSelect: (arg0: Village) => void;
}

const createItemData = memoize((villages, onSelect) => ({
    villages,
    onSelect,
}));

const MapResults = ({ villages, onSelect } : MapResultsProps) => {
    const ref = createRef<HTMLDivElement>();
    const height = useRef(0);
    const width = useRef(0);

    useLayoutEffect(() => {
        height.current = ref.current?.clientHeight ?? 0;
        width.current = ref.current?.clientWidth ?? 0;        
    }, [ref]);

    const itemData = createItemData(villages, onSelect);

    console.count('render mapresults')
    return <div className="flex flex-col min-h-0 max-h-full h-full" ref={ref}>
        <div className="flex justify-between px-4 mt-4">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Resultats</h1>
        </div>
        <div className={`mt-4 border-t border-gray-200 flex-grow max-h-full ${villages.length > 0 ? '' : ''}`}>
            <List
                itemSize={60}
                itemData={itemData}
                itemCount={villages.length}
                height={height.current}
                width={width.current}
            >
                {VillageItem}
            </List>
            {villages.length == 0 && <div className="text-center px-4 py-4">Aucun village trouvé</div>}
        </div>
    </div>
}

export default memo(MapResults);