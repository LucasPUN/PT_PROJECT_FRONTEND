import axios from "axios";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"

const baseUrl = "http://localhost:8080"

export async function putCartItem(pid: string, quantity: number) {
  await axios.put(
    `${baseUrl}/cart/items/${pid}/${quantity}`,
    null,
    await FirebaseAuthService.getAuthConfig()
  );
}