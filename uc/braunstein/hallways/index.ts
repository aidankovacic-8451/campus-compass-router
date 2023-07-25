import { UCHallway } from "../shared"
import floor1 from "./floor1"
import floor2 from "./floor2"
import floor3 from "./floor3"
import floor4 from "./floor4"

const hallways: UCHallway[] = [
    ...floor1,
    ...floor2,
    ...floor3,
    ...floor4
];
export default hallways;
