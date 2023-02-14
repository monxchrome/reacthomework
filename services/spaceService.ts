import {apiService} from "./apiService";
import {ISpaceX} from "../interfaces/spaceInterface";
import {IResponse} from "../interfaces/responseInterface";

const spaceService = {
    getAll: ():IResponse<ISpaceX[]> => apiService.get('/launches')
}

export {
    spaceService
}