import {AxiosResponse} from "axios";

type IResponse<DATA> = Promise<AxiosResponse<DATA>>

export {
    IResponse
}