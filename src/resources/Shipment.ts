import library from './library'

class Shipment extends library.Base {
  static define() {
    this.attributes('number', 'status', 'currency_code', 'cost_amount_cents', 'cost_amount_float', 'formatted_cost_amount', '_on_hold', '_picking', '_packing', '_ready_to_ship', '_ship', '_get_rates', 'selected_rate_id', '_purchase', 'id', 'created_at', 'updated_at', 'reference', 'metadata')

    this.hasOne('shippingCategory', {className: 'ShippingCategory'})
    this.hasOne('stockLocation', {className: 'StockLocation'})
    this.hasOne('shippingAddress', {className: 'Address'})
    this.hasOne('shippingMethod', {className: 'ShippingMethod'})

    this.hasMany('shipmentLineItems', {className: 'ShipmentLineItem'})
    this.hasMany('availableShippingMethods', {className: 'ShippingMethod'})
    this.hasMany('parcels', {className: 'Parcel'})
    this.hasMany('attachments', {className: 'Attachment'})
  }
}

export default library.createResource(Shipment)