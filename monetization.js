import { getSolidDataset, getStringNoLocale, getThing, getUrl } from '@inrupt/solid-client'

export const PP = {
  paymentPointer: "http://paymentpointers.org/ns#PaymentPointer"
}

export async function getPaymentPointer(webId){
  const dataset = await getSolidDataset(webId)
  const profile = getThing(dataset, webId)
  return getStringNoLocale(profile, PP.paymentPointer)
}

