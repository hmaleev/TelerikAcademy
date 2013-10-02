﻿using PhoneInformation.App.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Items Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=234233

namespace PhoneInformation.App.Views.Brands
{
    /// <summary>
    /// A page that displays a collection of item previews.  In the Split Application this page
    /// is used to display and select one of the available groups.
    /// </summary>
    public sealed partial class Sony : PhoneInformation.App.Common.LayoutAwarePage
    {
        public Sony()
        {
            this.InitializeComponent();
        }

        /// <summary>
        /// Populates the page with content passed during navigation.  Any saved state is also
        /// provided when recreating a page from a prior session.
        /// </summary>
        /// <param name="navigationParameter">The parameter value passed to
        /// <see cref="Frame.Navigate(Type, Object)"/> when this page was initially requested.
        /// </param>
        /// <param name="pageState">A dictionary of state preserved by this page during an earlier
        /// session.  This will be null the first time a page is visited.</param>
        protected override void LoadState(Object navigationParameter, Dictionary<String, Object> pageState)
        {
            // TODO: Assign a bindable collection of items to this.DefaultViewModel["Items"]
        }
        private void onTap(object sender, TappedRoutedEventArgs e)
        {
            var x = itemGridView.SelectedItem as PhoneModel;
            Url.location = x.Link;
            this.Frame.Navigate(typeof(Views.DetailedInformation.DetailInformation), x);
        }

        private void itemGridView_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {

            // Pho selected = itemGridView.SelectedItem as PhoneModel;
            var selected = itemGridView.SelectedItems;

            if (selected.Count == 2)
            {
                PhoneModel firstPhone = selected[0] as PhoneModel;
                PhoneModel secondPhone = selected[1] as PhoneModel;
                //  this.Frame.Navigate(typeof(Views.DetailedInformation.DetailInformation));
            }
        }
    }
}
