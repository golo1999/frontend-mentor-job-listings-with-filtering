import { useCallback, useEffect, useState } from "react";

type DeviceType = "DESKTOP" | "LAPTOP" | "MOBILE" | "TABLET";

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState<DeviceType>(getDeviceType());

  function getDeviceType(): DeviceType {
    if (window.innerWidth < 425) {
      return "MOBILE";
    } else if (window.innerWidth < 768) {
      return "TABLET";
    } else if (window.innerWidth < 1440) {
      return "LAPTOP";
    } else {
      return "DESKTOP";
    }
  }

  const handleResize = useCallback(() => {
    const newDeviceType = getDeviceType();

    if (newDeviceType !== deviceType) {
      setDeviceType(newDeviceType);
    }
  }, [deviceType]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return deviceType;
}
