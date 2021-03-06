import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship, SingleRelationship } from '#typings/Library'
import { CustomerCollection } from './Customer'
import { PriceListCollection } from './PriceList'

export class CustomerGroupCollection extends BaseClass {
  static className = 'CustomerGroup'
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  customers: () => MultiRelationship<CustomerCollection>
  priceList: () => SingleRelationship<PriceListCollection>
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

    this.hasOne('priceList', { className: 'PriceList' })

    this.hasMany('customers', { className: 'Customer' })
  }
}

const CustomerGroup = library.createResource<CustomerGroupCollection>(
  CustomerGroupCollection
)

export default CustomerGroup
