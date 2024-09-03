import { Outlet } from "react-router-dom";
import '../../css/PhoneLayout/style.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBillList } from "../../store/modules/billStore";

const PhoneLayout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBillList());
    }, [dispatch]);


    return (
        <div>
            <h1>Phone Layout</h1>

            <Outlet />
        </div>
    );
};

export default PhoneLayout;