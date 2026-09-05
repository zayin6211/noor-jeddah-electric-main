# SEO Changelog

## 2026-09-04

### Technical SEO

- توحيد إدارة Metadata للصفحات.
- إضافة Route-specific Titles وDescriptions.
- إضافة Canonical URLs.
- تحديث Robots directives.
- تحديث Sitemap ليشمل جميع المسارات العامة السبعة.
- إضافة Open Graph metadata.
- إضافة Twitter metadata.
- إضافة Google Search Console verification metadata.
- الحفاظ على Arabic RTL document structure.

### Structured Data

- إضافة Electrician structured data للنشاط.
- إضافة Service structured data لصفحات الخدمات.
- إضافة BreadcrumbList لصفحات الخدمات.
- تجنب AggregateRating وReview structured data المبني على بيانات غير موثقة.

### Local SEO

- تعريف النشاط كنشاط Service-area في جدة.
- استخدام جدة كنطاق الخدمة.
- عدم إضافة عنوان تجاري غير مؤكد.
- الحفاظ على معلومات الهاتف وواتساب الصحيحة.
- تجنب إنشاء فروع أو مواقع غير موجودة.

### Internal Linking

- ربط صفحة الخدمات بالصفحات التفصيلية الموجودة.
- ربط الخدمات المناسبة من الصفحة الرئيسية.
- تحسين الوصول إلى صفحة التواصل.
- الحفاظ على مسارات واضحة ومباشرة.

### Performance

- إضافة Responsive Hero Images.
- إضافة نسخة 768px للشاشات الصغيرة.
- إضافة نسخة 1024px للشاشات المتوسطة.
- استخدام الصورة الأكبر فقط عند الحاجة.
- تقليل حجم الصورة المنقولة للأجهزة الصغيرة.

### Accessibility

- إضافة Skip Link.
- تحسين Focus Visible.
- مراجعة التنقل باستخدام لوحة المفاتيح.
- الحفاظ على Semantic HTML.
- الحفاظ على Arabic RTL structure.
- دعم Reduced Motion.

---

## 2026-09-05

### Reviews

- إضافة نظام تقييمات باستخدام Vercel Function وNeon PostgreSQL.
- إضافة GET وPOST إلى `/api/reviews`.
- إضافة Server-side validation.
- إضافة حدود لطول الاسم والتعليق.
- التحقق من التقييم من 1 إلى 5.
- إضافة Honeypot للحماية من Spam.
- إضافة Rate Limiting.
- إضافة منع التقييمات المكررة.
- منع الروابط والمحتوى غير الآمن داخل المدخلات.
- استخدام React rendering الآمن للنصوص.
- عدم جمع رقم الهاتف أو البريد الإلكتروني ضمن نموذج التقييم.
- عدم استخدام التقييمات الوهمية كإشارات SEO.

### Production Verification

- نجاح تثبيت Dependencies باستخدام `npm.cmd ci`.
- نجاح `npm.cmd run lint`.
- نجاح `npm.cmd run build`.
- تم عمل Prerender لجميع المسارات العامة.
- اختبار إرسال تقييم فعلي من الموقع.
- تأكيد وصول التقييم إلى قاعدة البيانات.
- حذف التقييم التجريبي بعد الاختبار.
- تأكيد أن عدد التقييمات أصبح `0`.
- تأكيد أن Production API يرجع:

```json
{
  "reviews": []
}