import NETWORK from "constants/network";
import { useRedux } from "hooks/useRedux";

export const useIsSoroban = () => {
  const { network } = useRedux("network", "routing");
  const { horizonURL, networkPassphrase } = network.current;
  const url = new URL(horizonURL);

  let isOnFuturenet = false;
  if (
    url.origin === NETWORK.available.futurenet.horizonURL &&
    networkPassphrase === NETWORK.available.futurenet.networkPassphrase
  ) {
    isOnFuturenet = true;
  }
  return isOnFuturenet;
};