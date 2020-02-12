import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionResponse } from './@types/Library'
import { CustomerCollection } from './Customer'

export class CustomerGroupCollection extends BaseClass {
  static className = 'CustomerGroup'
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  customers: () => CollectionResponse<CustomerCollection>

  static define() {
    this.attributes(
      'name',
      'id',
      'created_at',
      'updated_at',
      'reference',
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
