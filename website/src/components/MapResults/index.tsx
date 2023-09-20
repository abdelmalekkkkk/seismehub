import { RefObject, createRef, memo, useEffect, useLayoutEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ModalNeeds from "../ModalNeeds";

import "./index.css";
import ModalConvoys from "../ModalConvoys";
import VillageAccessibility from "../VillageAccessibllity";

type MapResultsProps = {
    villages: Village[];
    onSelect: (arg0: Village) => void;
    onPan: (arg0: Village) => void;
    setTable: (tableRef: RefObject<DataTable<Village[]> | undefined>) => void;
};

const MapResults = ({ villages, onSelect, onPan, setTable }: MapResultsProps) => {
    const ref = createRef<HTMLDivElement>();
    const tableRef = createRef<DataTable<Village[]>>();
    const height = useRef("");

    useLayoutEffect(() => {
        height.current = ref.current?.clientHeight + "px";
    }, [ref]);

    useEffect(() => {
        setTable(tableRef);
    }, [tableRef]);

    return (
        
        <div className="flex flex-col min-h-0 max-h-full h-full" ref={ref}>
            <div className="flex justify-between px-4 py-3 border-b border-gray-100">
                <h1 className="text-2xl font-medium tracking-tight text-gray-900">
                    Resultats
                </h1>
            </div>
            {height.current != "" && <DataTable
                value={villages}
                scrollable
                scrollHeight={height.current}
                virtualScrollerOptions={{ itemSize: 52 }}
                ref={tableRef}
                rows={villages.length}
            >
                <Column
                    field="name"
                    header="Nom"
                    sortable
                    body={(v: Village) => (
                        <div key={v.id}>
                            <span
                                onClick={() => onSelect(v)}
                                className=" text-indigo-800 font-medium underline cursor-pointer"
                            >{v.name}</span>
                        </div>
                    )}
                    style={{ width: "20%" }}
                />
                <Column
                    field="population"
                    header="Population"
                    sortable    
                    style={{ width: "5%" }}
                />
                <Column
                    field="menage"
                    header="Menage"
                    sortable
                    style={{ width: "5%" }}
                />
                <Column
                    field="accessible_road"
                    header="Route praticable"
                    body={VillageAccessibility}
                    sortable
                    style={{ width: "5%" }}
                />
                <Column
                    field="needs_recap"
                    header="Besoins"
                    sortable
                    sortField="needs.length"
                    body={ModalNeeds}
                    style={{ width: "5%" }}
                />
                <Column
                    field="convoys_recap"
                    header="Convois"
                    sortable
                    sortField="convoys.length"
                    body={ModalConvoys}
                    style={{ width: "5%" }}
                />
                
                <Column
                    body={(v: Village) => (
                        <div key={v.id}>
                            <span
                                onClick={() => onPan(v)}
                                className="pi pi-map-marker text-indigo-800 cursor-pointer"
                            ></span>
                        </div>
                    )}
                    style={{ width: "5%" }}
                />
            </DataTable>}
        </div>
    );
};

export default memo(MapResults);
