import React, { useEffect, useState } from 'react'
import { SubscriptionResponse } from '../../models/reponses/subscription-response'
import { getSubscriptions } from '../../services/subscription.service'

export default function AccountApis() {
  const [subscriptions, setSubscriptions] = useState<SubscriptionResponse>()

  useEffect(() => {
    const getData = async () => {
      const subscriptionResult = await getSubscriptions()
      setSubscriptions(subscriptionResult)
      console.log(subscriptionResult)
    }

    getData()
    return () => {}
  }, [])

  return (
    <div className="bg-blue-50">
      <div className="container mx-auto my-10 card">
        <h1 className="text-lg font-semibold text-gray-700">
          Mi subscripciones
        </h1>
        <h2 className="text-lg font-semibold text-gray-700">
          A continuación, encontrará sus suscripciones de APIs.
        </h2>

        <table className="w-full border-2 border-gray-300 mt-8">
          <thead>
            <tr className="bg-gray-200">
              <th className="font-normal text-left p-2">API</th>
              <th className="font-normal text-left p-2">Plan</th>
              <th className="font-normal text-left p-2">Creada</th>
              <th className="font-normal text-left p-2">Estado</th>
              {/* <th>Version</th> */}
              <th className="font-normal text-left p-2">Accion</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions?.data?.map((subscription) => (
              <tr key={subscription.id} className="border-b border-gray-300">
                <td className="p-2">
                  {subscriptions.metadata[subscription.api].name}
                </td>
                <td className="p-2">
                  {subscriptions.metadata[subscription.plan].name}
                </td>
                <td className="p-2">
                  {new Date(subscription.created_at).toLocaleDateString()}
                </td>
                <td
                  className={`capitalize subscription-status-${subscription.status.toLowerCase()}`}
                >
                  {subscription.status.toLowerCase()}
                </td>
                {/* <td>v1</td> */}
                <td className="p-2">
                  <button className="text-yellow-500">Cancelar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
