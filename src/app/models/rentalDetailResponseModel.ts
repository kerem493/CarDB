import { RentalDetail } from "./rentalsDetail";
import { ResponseModel } from "./responseModel";

export interface RentalDetailResponseModel extends ResponseModel{
    data:RentalDetail[]
}