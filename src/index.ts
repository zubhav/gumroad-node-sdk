import {
  getProducts,
  getProduct,
  deleteProduct,
  enableProduct,
  disableProduct,
  ProductsResponse,
  ProductResponse,
  DeleteProductResponse,
} from './entities/products';
import {
  createVariantCategory,
  getVariantCategory,
  updateVariantCategory,
  deleteVariantCategory,
  getVariantCategories,
  createVariant,
  getVariant,
  updateVariant,
  deleteVariant,
  getVariants,
  VariantCategoryResponse,
  VariantCategoriesResponse,
  VariantResponse,
  VariantsResponse,
  DeleteResponse,
} from './entities/variantCategories';
import {
  getOfferCodes,
  getOfferCode,
  createOfferCode,
  updateOfferCode,
  deleteOfferCode,
  OfferCodesResponse,
  OfferCodeResponse,
  DeleteOfferCodeResponse,
} from './entities/offerCodes';
import {
  getCustomFields,
  createCustomField,
  updateCustomField,
  deleteCustomField,
  CustomFieldsResponse,
  CustomFieldResponse,
  DeleteCustomFieldResponse,
} from './entities/customFields';
import { getUser, UserResponse } from './entities/user';
import {
  subscribeToResource,
  getResourceSubscriptions,
  unsubscribeFromResource,
  ResourceName,
  ResourceSubscriptionResponse,
  ResourceSubscriptionsResponse,
  DeleteResourceSubscriptionResponse,
} from './entities/resourceSubscriptions';
import {
  getSales,
  getSale,
  markAsShipped,
  refundSale,
  SalesResponse,
  SaleResponse,
} from './entities/sales';
import {
  getSubscribers,
  getSubscriber,
  SubscribersResponse,
  SubscriberResponse,
} from './entities/subscribers';
import {
  verifyLicense,
  enableLicense,
  disableLicense,
  decrementLicenseUsesCount,
  LicenseResponse,
} from './entities/licenses';

class GumroadApiClient {
  private accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  async getProducts(): Promise<ProductsResponse> {
    return getProducts({ accessToken: this.accessToken });
  }

  async getProduct({
    productId,
  }: {
    productId: string;
  }): Promise<ProductResponse> {
    return getProduct({ accessToken: this.accessToken, productId });
  }

  async deleteProduct({
    productId,
  }: {
    productId: string;
  }): Promise<DeleteProductResponse> {
    return deleteProduct({ accessToken: this.accessToken, productId });
  }

  async enableProduct({
    productId,
  }: {
    productId: string;
  }): Promise<ProductResponse> {
    return enableProduct({ accessToken: this.accessToken, productId });
  }

  async disableProduct({
    productId,
  }: {
    productId: string;
  }): Promise<ProductResponse> {
    return disableProduct({ accessToken: this.accessToken, productId });
  }

  async createVariantCategory({
    productId,
    title,
  }: {
    productId: string;
    title: string;
  }): Promise<VariantCategoryResponse> {
    return createVariantCategory({
      accessToken: this.accessToken,
      productId,
      title,
    });
  }

  async getVariantCategory({
    productId,
    variantCategoryId,
  }: {
    productId: string;
    variantCategoryId: string;
  }): Promise<VariantCategoryResponse> {
    return getVariantCategory({
      accessToken: this.accessToken,
      productId,
      variantCategoryId,
    });
  }

  async updateVariantCategory({
    productId,
    variantCategoryId,
    title,
  }: {
    productId: string;
    variantCategoryId: string;
    title: string;
  }): Promise<VariantCategoryResponse> {
    return updateVariantCategory({
      accessToken: this.accessToken,
      productId,
      variantCategoryId,
      title,
    });
  }

  async deleteVariantCategory({
    productId,
    variantCategoryId,
  }: {
    productId: string;
    variantCategoryId: string;
  }): Promise<DeleteResponse> {
    return deleteVariantCategory({
      accessToken: this.accessToken,
      productId,
      variantCategoryId,
    });
  }

  async getVariantCategories({
    productId,
  }: {
    productId: string;
  }): Promise<VariantCategoriesResponse> {
    return getVariantCategories({ accessToken: this.accessToken, productId });
  }

  async createVariant({
    productId,
    variantCategoryId,
    name,
    price_difference_cents,
    max_purchase_count,
  }: {
    productId: string;
    variantCategoryId: string;
    name: string;
    price_difference_cents: number;
    max_purchase_count?: number;
  }): Promise<VariantResponse> {
    return createVariant({
      accessToken: this.accessToken,
      productId,
      variantCategoryId,
      name,
      price_difference_cents,
      max_purchase_count,
    });
  }

  async getVariant({
    productId,
    variantCategoryId,
    variantId,
  }: {
    productId: string;
    variantCategoryId: string;
    variantId: string;
  }): Promise<VariantResponse> {
    return getVariant({
      accessToken: this.accessToken,
      productId,
      variantCategoryId,
      variantId,
    });
  }

  async updateVariant({
    productId,
    variantCategoryId,
    variantId,
    name,
    price_difference_cents,
    max_purchase_count,
  }: {
    productId: string;
    variantCategoryId: string;
    variantId: string;
    name?: string;
    price_difference_cents?: number;
    max_purchase_count?: number;
  }): Promise<VariantResponse> {
    return updateVariant({
      accessToken: this.accessToken,
      productId,
      variantCategoryId,
      variantId,
      name,
      price_difference_cents,
      max_purchase_count,
    });
  }

  async deleteVariant({
    productId,
    variantCategoryId,
    variantId,
  }: {
    productId: string;
    variantCategoryId: string;
    variantId: string;
  }): Promise<DeleteResponse> {
    return deleteVariant({
      accessToken: this.accessToken,
      productId,
      variantCategoryId,
      variantId,
    });
  }

  async getVariants({
    productId,
    variantCategoryId,
  }: {
    productId: string;
    variantCategoryId: string;
  }): Promise<VariantsResponse> {
    return getVariants({
      accessToken: this.accessToken,
      productId,
      variantCategoryId,
    });
  }

  async getOfferCodes({
    productId,
  }: {
    productId: string;
  }): Promise<OfferCodesResponse> {
    return getOfferCodes({ accessToken: this.accessToken, productId });
  }

  async getOfferCode({
    productId,
    offerCodeId,
  }: {
    productId: string;
    offerCodeId: string;
  }): Promise<OfferCodeResponse> {
    return getOfferCode({
      accessToken: this.accessToken,
      productId,
      offerCodeId,
    });
  }

  async createOfferCode({
    productId,
    name,
    amount_off,
    offer_type = 'cents',
    max_purchase_count,
    universal = false,
  }: {
    productId: string;
    name: string;
    amount_off: number;
    offer_type?: 'cents' | 'percent';
    max_purchase_count?: number;
    universal?: boolean;
  }): Promise<OfferCodeResponse> {
    return createOfferCode({
      accessToken: this.accessToken,
      productId,
      name,
      amount_off,
      offer_type,
      max_purchase_count,
      universal,
    });
  }

  async updateOfferCode({
    productId,
    offerCodeId,
    max_purchase_count,
  }: {
    productId: string;
    offerCodeId: string;
    max_purchase_count: number;
  }): Promise<OfferCodeResponse> {
    return updateOfferCode({
      accessToken: this.accessToken,
      productId,
      offerCodeId,
      max_purchase_count,
    });
  }

  async deleteOfferCode({
    productId,
    offerCodeId,
  }: {
    productId: string;
    offerCodeId: string;
  }): Promise<DeleteOfferCodeResponse> {
    return deleteOfferCode({
      accessToken: this.accessToken,
      productId,
      offerCodeId,
    });
  }

  async getCustomFields({
    productId,
  }: {
    productId: string;
  }): Promise<CustomFieldsResponse> {
    return getCustomFields({ accessToken: this.accessToken, productId });
  }

  async createCustomField({
    productId,
    name,
    required,
    variant,
  }: {
    productId: string;
    name: string;
    required: boolean;
    variant?: string;
  }): Promise<CustomFieldResponse> {
    return createCustomField({
      accessToken: this.accessToken,
      productId,
      name,
      required,
      variant,
    });
  }

  async updateCustomField({
    productId,
    name,
    required,
    variant,
  }: {
    productId: string;
    name: string;
    required?: boolean;
    variant?: string;
  }): Promise<CustomFieldResponse> {
    return updateCustomField({
      accessToken: this.accessToken,
      productId,
      name,
      required,
      variant,
    });
  }

  async deleteCustomField({
    productId,
    name,
  }: {
    productId: string;
    name: string;
  }): Promise<DeleteCustomFieldResponse> {
    return deleteCustomField({
      accessToken: this.accessToken,
      productId,
      name,
    });
  }

  async getUser(): Promise<UserResponse> {
    return getUser({ accessToken: this.accessToken });
  }

  async subscribeToResource({
    resourceName,
    postUrl,
  }: {
    resourceName: ResourceName;
    postUrl: string;
  }): Promise<ResourceSubscriptionResponse> {
    return subscribeToResource({
      accessToken: this.accessToken,
      resourceName,
      postUrl,
    });
  }

  async getResourceSubscriptions({
    resourceName,
  }: {
    resourceName: ResourceName;
  }): Promise<ResourceSubscriptionsResponse> {
    return getResourceSubscriptions({
      accessToken: this.accessToken,
      resourceName,
    });
  }

  async unsubscribeFromResource({
    resourceSubscriptionId,
  }: {
    resourceSubscriptionId: string;
  }): Promise<DeleteResourceSubscriptionResponse> {
    return unsubscribeFromResource({
      accessToken: this.accessToken,
      resourceSubscriptionId,
    });
  }

  async getSales({
    after,
    before,
    product_id,
    email,
    order_id,
    page_key,
  }: {
    after?: string;
    before?: string;
    product_id?: string;
    email?: string;
    order_id?: string;
    page_key?: string;
  }): Promise<SalesResponse> {
    return getSales({
      accessToken: this.accessToken,
      after,
      before,
      product_id,
      email,
      order_id,
      page_key,
    });
  }

  async getSale({ saleId }: { saleId: string }): Promise<SaleResponse> {
    return getSale({
      accessToken: this.accessToken,
      saleId,
    });
  }

  async markAsShipped({
    saleId,
    tracking_url,
  }: {
    saleId: string;
    tracking_url?: string;
  }): Promise<SaleResponse> {
    return markAsShipped({
      accessToken: this.accessToken,
      saleId,
      tracking_url,
    });
  }

  async refundSale({
    saleId,
    amount_cents,
  }: {
    saleId: string;
    amount_cents?: number;
  }): Promise<SaleResponse> {
    return refundSale({
      accessToken: this.accessToken,
      saleId,
      amount_cents,
    });
  }

  async getSubscribers({
    productId,
    email,
  }: {
    productId: string;
    email?: string;
  }): Promise<SubscribersResponse> {
    return getSubscribers({
      accessToken: this.accessToken,
      productId,
      email,
    });
  }

  async getSubscriber({
    subscriberId,
  }: {
    subscriberId: string;
  }): Promise<SubscriberResponse> {
    return getSubscriber({
      accessToken: this.accessToken,
      subscriberId,
    });
  }

  async verifyLicense({
    productId,
    licenseKey,
    incrementUsesCount = true,
  }: {
    productId: string;
    licenseKey: string;
    incrementUsesCount?: boolean;
  }): Promise<LicenseResponse> {
    return verifyLicense({
      productId,
      licenseKey,
      incrementUsesCount,
    });
  }

  async enableLicense({
    productId,
    licenseKey,
  }: {
    productId: string;
    licenseKey: string;
  }): Promise<LicenseResponse> {
    return enableLicense({
      accessToken: this.accessToken,
      productId,
      licenseKey,
    });
  }

  async disableLicense({
    productId,
    licenseKey,
  }: {
    productId: string;
    licenseKey: string;
  }): Promise<LicenseResponse> {
    return disableLicense({
      accessToken: this.accessToken,
      productId,
      licenseKey,
    });
  }

  async decrementLicenseUsesCount({
    productId,
    licenseKey,
  }: {
    productId: string;
    licenseKey: string;
  }): Promise<LicenseResponse> {
    return decrementLicenseUsesCount({
      accessToken: this.accessToken,
      productId,
      licenseKey,
    });
  }
}

export default GumroadApiClient;
