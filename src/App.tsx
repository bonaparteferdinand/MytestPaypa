import { Menu, Bell, ChevronRight, Home, CreditCard, ArrowUpDown, FileText, ShoppingBag, Upload, X } from 'lucide-react';
import { useState, useRef } from 'react';

function App() {
  const [balance, setBalance] = useState('1.55');
  const [activityCount, setActivityCount] = useState('10');
  const [profileImage, setProfileImage] = useState('https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100');
  const [paypalLogo, setPaypalLogo] = useState<string | null>(null);
  const [activityImages, setActivityImages] = useState([
    null,
    null,
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
  ]);
  const [activityIcons, setActivityIcons] = useState<(string | null)[]>([null, null, null]);
  const [activityGap, setActivityGap] = useState('0.5');
  const [showWatermark, setShowWatermark] = useState(true);
  const [navIcons, setNavIcons] = useState<{[key: string]: string | null}>({
    accounts: null,
    activity: null,
    offers: null
  });

  const profileInputRef = useRef<HTMLInputElement>(null);
  const paypalLogoInputRef = useRef<HTMLInputElement>(null);
  const activityInputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ];
  const activityIconRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ];
  const navIconRefs = {
    accounts: useRef<HTMLInputElement>(null),
    activity: useRef<HTMLInputElement>(null),
    offers: useRef<HTMLInputElement>(null)
  };

  const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBalance(e.target.value);
  };

  const handleActivityCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActivityCount(e.target.value);
  };

  const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleActivityImageUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...activityImages];
        newImages[index] = reader.result as string;
        setActivityImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePaypalLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPaypalLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNavIconUpload = (iconKey: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNavIcons(prev => ({ ...prev, [iconKey]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleActivityIconUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newIcons = [...activityIcons];
        newIcons[index] = reader.result as string;
        setActivityIcons(newIcons);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full min-h-screen bg-gray-50 max-w-[430px] mx-auto relative">
        {showWatermark && (
          <div className="fixed top-4 right-4 z-50 bg-black/80 text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm">
            <span>Made in bolt</span>
            <button
              onClick={() => setShowWatermark(false)}
              className="hover:bg-white/20 rounded p-0.5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
          <button className="w-10 h-10 flex items-center justify-center">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center">
              <Bell className="w-6 h-6 text-gray-700" />
            </button>
            <div
              className="w-11 h-11 rounded-full overflow-hidden cursor-pointer relative group"
              onClick={() => profileInputRef.current?.click()}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <Upload className="w-5 h-5 text-white" />
              </div>
              <input
                ref={profileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfileImageUpload}
              />
            </div>
          </div>
        </div>

        <div className="pb-24 overflow-y-auto min-h-screen">
          <div className="flex gap-3 overflow-x-auto px-6 mb-4 scrollbar-hide">
            <div className="bg-white rounded-2xl p-6 shadow-sm min-w-[340px] flex-shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-14 h-10 bg-blue-600 rounded flex items-center justify-center cursor-pointer relative group overflow-hidden"
                  onClick={() => paypalLogoInputRef.current?.click()}
                >
                  {paypalLogo ? (
                    <>
                      <img src={paypalLogo} alt="PayPal" className="w-full h-full object-contain" />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <Upload className="w-4 h-4 text-white" />
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="text-white font-bold text-sm">PayPal</span>
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <Upload className="w-4 h-4 text-white" />
                      </div>
                    </>
                  )}
                  <input
                    ref={paypalLogoInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePaypalLogoUpload}
                  />
                </div>
                <span className="text-lg font-medium text-gray-900">PayPal balance</span>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-semibold text-gray-900">$</span>
                <input
                  type="text"
                  value={balance}
                  onChange={handleBalanceChange}
                  className="text-5xl font-semibold text-gray-900 bg-transparent border-none outline-none w-32 focus:ring-2 focus:ring-blue-500 rounded px-1"
                />
              </div>

              <div className="bg-blue-600 rounded-2xl p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-white text-2xl font-semibold">+5%</div>
                  <div className="text-white">
                    <div className="font-semibold text-base">Earn up to $50 cash back</div>
                    <div className="text-sm opacity-90">Choose your 5%</div>
                    <div className="text-sm opacity-90">monthly category</div>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-white flex-shrink-0" />
              </div>
            </div>

            <div className="bg-black rounded-2xl p-6 shadow-sm min-w-[340px] flex-shrink-0 flex flex-col justify-center">
              <span className="text-white text-lg font-semibold mb-4">Crypto</span>
              <p className="text-white text-base">Buy, sell Bitcoin and more</p>
            </div>
          </div>

          <div className="px-6">
          <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-600 text-sm mb-1">Recent activity</div>
                <input
                  type="text"
                  value={activityCount}
                  onChange={handleActivityCountChange}
                  className="text-3xl font-semibold text-gray-900 bg-transparent border-none outline-none w-16 focus:ring-2 focus:ring-blue-500 rounded px-1"
                />
              </div>
              <div className="mb-2">
                <label className="text-xs text-gray-500 block mb-1">Icon Gap (rem)</label>
                <input
                  type="number"
                  value={activityGap}
                  onChange={(e) => setActivityGap(e.target.value)}
                  step="0.125"
                  min="0"
                  max="4"
                  className="text-sm px-2 py-1 border border-gray-300 rounded w-20 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="flex items-center" style={{ gap: `${activityGap}rem` }}>
                {activityImages.map((img, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <div
                      className="w-10 h-10 rounded-full overflow-hidden cursor-pointer relative group bg-gray-900"
                      onClick={() => activityInputRefs[index].current?.click()}
                    >
                      {img ? (
                        <>
                          <img
                            src={img}
                            alt={`Activity ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <Upload className="w-3 h-3 text-white" />
                          </div>
                        </>
                      ) : activityIcons[index] ? (
                        <>
                          <img
                            src={activityIcons[index]!}
                            alt={`Icon ${index + 1}`}
                            className="w-full h-full object-contain p-2"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <Upload className="w-3 h-3 text-white" />
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-white" />
                        </div>
                      )}
                      <input
                        ref={activityInputRefs[index]}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleActivityImageUpload(index, e)}
                      />
                    </div>
                    <button
                      onClick={() => activityIconRefs[index].current?.click()}
                      className="text-xs text-blue-600 hover:text-blue-700 px-1"
                    >
                      Icon
                    </button>
                    <input
                      ref={activityIconRefs[index]}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleActivityIconUpload(index, e)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Featured offers</h2>
              <button className="flex items-center gap-1 text-gray-700">
                <span className="text-sm">See all</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <div className="bg-gray-600 rounded-2xl p-6 min-w-[340px] relative">
                <div className="flex items-center gap-3 mb-16">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
                      <div className="bg-red-500"></div>
                      <div className="bg-green-500"></div>
                      <div className="bg-blue-500"></div>
                      <div className="bg-yellow-500"></div>
                    </div>
                  </div>
                  <span className="text-white text-xl font-medium">Microsoft</span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-white text-lg">20% cash back up to $175</span>
                  <button className="bg-white text-gray-900 px-6 py-2.5 rounded-full font-semibold text-sm">
                    Save
                  </button>
                </div>
              </div>

              <div className="bg-purple-900 rounded-2xl p-6 min-w-[340px]">
                <div className="text-white text-4xl font-bold">5%</div>
                <div className="text-white text-sm mt-2">Featured</div>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-600 leading-relaxed mb-8">
            <a href="#" className="text-blue-600 underline">Rewards terms</a> and{' '}
            <a href="#" className="text-blue-600 underline">PayPal Debit Rewards terms</a> may apply. See offers for details and exclusions.
          </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 max-w-[430px] mx-auto">
          <div className="flex items-center justify-between">
            <button className="flex flex-col items-center gap-1 flex-1">
              <Home className="w-6 h-6 text-gray-900" />
              <span className="text-xs font-semibold text-gray-900">Home</span>
            </button>
            <button
              className="flex flex-col items-center gap-1 flex-1 relative group"
              onClick={() => navIconRefs.accounts.current?.click()}
            >
              {navIcons.accounts ? (
                <div className="w-6 h-6 relative">
                  <img src={navIcons.accounts} alt="Accounts" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Upload className="w-3 h-3 text-white" />
                  </div>
                </div>
              ) : (
                <CreditCard className="w-6 h-6 text-gray-600" />
              )}
              <span className="text-xs text-gray-600">Accounts</span>
              <input
                ref={navIconRefs.accounts}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleNavIconUpload('accounts', e)}
              />
            </button>
            <button className="flex flex-col items-center gap-1 flex-1 -mt-8">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <ArrowUpDown className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs text-gray-600 mt-1">Send/Request</span>
            </button>
            <button
              className="flex flex-col items-center gap-1 flex-1 relative group"
              onClick={() => navIconRefs.activity.current?.click()}
            >
              {navIcons.activity ? (
                <div className="w-6 h-6 relative">
                  <img src={navIcons.activity} alt="Activity" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Upload className="w-3 h-3 text-white" />
                  </div>
                </div>
              ) : (
                <FileText className="w-6 h-6 text-gray-600" />
              )}
              <span className="text-xs text-gray-600">Activity</span>
              <input
                ref={navIconRefs.activity}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleNavIconUpload('activity', e)}
              />
            </button>
            <button
              className="flex flex-col items-center gap-1 flex-1 relative group"
              onClick={() => navIconRefs.offers.current?.click()}
            >
              {navIcons.offers ? (
                <div className="w-6 h-6 relative">
                  <img src={navIcons.offers} alt="Offers" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Upload className="w-3 h-3 text-white" />
                  </div>
                </div>
              ) : (
                <ShoppingBag className="w-6 h-6 text-gray-600" />
              )}
              <span className="text-xs text-gray-600">Offers</span>
              <input
                ref={navIconRefs.offers}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleNavIconUpload('offers', e)}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
