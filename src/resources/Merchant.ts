import library from './library'
import BaseClass from '#utils/BaseClass'
import { AddressCollection } from './Address'
import { SingleRelationship } from '#typings/Library'

export class MerchantCollection extends BaseClass {
  static className = 'Merchant'
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  address: () => SingleRelationship<AddressCollection>
  static define() {
    this.attributes(
      'name',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('address', { className: 'Address' })
  }
}

const Merchant = library.createResource<MerchantCollection>(MerchantCollection)

export default Merchant
