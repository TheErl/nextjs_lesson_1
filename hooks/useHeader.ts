import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "slices/theme";

const useHeader = () => {

    const dispatch = useDispatch();

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        // console.log('handleCloseNavMenu');
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };    

    const handleChangeTheme = () => {
        dispatch(toggleTheme());
    };

    return { handleChangeTheme, handleOpenNavMenu, handleOpenUserMenu, handleCloseNavMenu, handleCloseUserMenu, anchorElNav, anchorElUser };
    
};

export default useHeader;