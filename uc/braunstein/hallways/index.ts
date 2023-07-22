import { UCHallway } from "../shared"
import floor1 from "./floor1"
import floor2 from "./floor2"
import floor3 from "./floor3"

const hallways: UCHallway[] = [
    ...floor1,
    ...floor2,
    ...floor3
];
export default hallways;
