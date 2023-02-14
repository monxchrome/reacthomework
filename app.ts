import {spaceService} from "./services/spaceService";


spaceService.getAll().then(({data}) => {
    console.log(data[0].mission_name);
})